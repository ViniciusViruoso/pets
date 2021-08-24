import React from "react";
import { PASSWORD_LOST } from "../../Api/api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function resetPass(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const {json} = await request(url, options);
      console.log(json)
    }
  }

  return (
    <section className="animeTop">
      <Head title={`Recuperação | `} description={`Recupere a e redefina a senha de sua conta.`}/>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? <p className="textPara positive">{data}</p> :
        <form onSubmit={resetPass}>
          <Input label="E-mail ou Usuário*" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Recuperar senha</Button>
          )}
        </form>
      }
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;
