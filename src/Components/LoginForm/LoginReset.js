import React from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "../../Api/api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const {loading, error, request } = useFetch();
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get("login");
    const key = params.get("key");

    if (login) setLogin(login);
    if (key) setKey(key);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.validate()){
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const {response} = await request(url,options)
      if(response.ok) navigate('/')
    }
  }

  return (
    <section className="animeTop">
      <Head title={`Redefina sua senha  | `} description={`Redefina sua senha e faça o login.`}/>
      <h1 className="title">Redefina sua Senha.</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? <Button disabled>Redefinindo sua senha...</Button>:<Button>Redefinir</Button>}
      </form>
      {error && <Error error={error}/>}
    </section>
  );
};

export default LoginReset;
