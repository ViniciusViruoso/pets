import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Head from '../../Components/Helper/Head';
import LoginCreate from '../../Components/LoginForm/LoginCreate';
import LoginForm from '../../Components/LoginForm/LoginForm';
import LoginPasswordLost from '../../Components/LoginForm/LoginPasswordLost';
import LoginReset from '../../Components/LoginForm/LoginReset';
import NotFund from '../../Components/NotFund';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css'

const Login = () => {
  const {login} = React.useContext(UserContext)
  if(login === true) return <Navigate to='/conta'/>

  return (
    <section className={styles.login}>
      <Head title="Faça seu login | " description="Entre,crie ou recupere sua conta."/>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="criar" element={<LoginCreate/>}/>
          <Route path="perdeu" element={<LoginPasswordLost/>}/>
          <Route path="resetar" element={<LoginReset/>}/>
          <Route path='*' element={<NotFund/>} />
        </Routes>
      </div>
    </section>
  )
}

export default Login;
