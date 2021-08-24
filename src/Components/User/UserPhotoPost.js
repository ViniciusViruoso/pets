import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../Api/api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate()

  

  React.useEffect(() => {
    if(data) navigate('/')
  },[data,navigate])

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("idade", idade.value);
    formData.append("peso", peso.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeTop`}>
      <Head title={`Postar nova foto | `} description="Adicione um nova foto para que todos possam ver!"/>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="idade" {...idade} />
        <label className={styles.photoLabel} htmlFor="img">
          Selecione sua foto *
        </label>
        <input
          className={styles.photoImg}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? <Button disabled>Postando...</Button> : <Button>Postar</Button>}
        <Error error={error}/>
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.imgPreview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
