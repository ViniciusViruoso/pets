import React from 'react'
import { USER_POST } from '../../Api/api'
import { UserContext } from '../../UserContext'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { Link } from 'react-router-dom'
import Head from '../Helper/Head'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  const {userLogin} = React.useContext(UserContext)
  const {loading,error,request} = useFetch()

  async function newUser(e) {
    e.preventDefault()
    const {url,options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const {response} = await request(url,options)
    if(response.ok) userLogin(username.value,password.value)
  }

  return (
    <div className="animeTop">
      <Head title={`Criar conta | `} description={`Crie sua conta para entra na comunidade PETS`}/>
      <h1 className="title">Cadastre-se</h1>
      <h2>Crie sua conta.</h2>
      <p className="textPara">Comente em fotos, publique suas fotos e mostre ao mundo a <strong>FOFURA QUE VOCÊ É!</strong> </p>
      <form onSubmit={newUser}>
      <Input label="Nome de usuário *" type="text" name="username" required { ...username}/>
      <Input label="Digite seu email *" type="email" name="email" required { ...email}/>
      <Input label="Digite sua senha *" type="password" name="password" required { ...password}/>
      {loading ? 
          <Button disabled>Criando sua conta...</Button> 
          :  
          <Button>Criar Conta</Button>
        }
        <Link style={{marginTop:'2rem',textDecoration: 'underline',padding:'1rem 0'}} to='/'>🠔 Voltar para o login.</Link>
        <Error error={error}/>
      </form>
    </div>
  )
}

export default LoginCreate
