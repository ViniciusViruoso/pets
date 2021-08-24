import React from "react";
import { PHOTO_DELETE } from "../../Api/api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function deletePhoto() {
    const confirm = window.confirm("Tem certeza que quer apagar essa foto?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete} onClick={deletePhoto}>
          Apagando...
        </button>
      ) : (
        <button className={styles.delete} onClick={deletePhoto}>
          Apagar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
