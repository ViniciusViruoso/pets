import React from "react";
import { COMMENT_POST } from "../../Api/api";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import styles from "./PhotoForm.module.css";


const PhotoCommentsForm = ({ id , setComments}) => {
  const [comment, setComment] = React.useState();
  const {request,error} = useFetch()

  async function commentPost(e) {
    e.preventDefault()
    const {url,options} = COMMENT_POST(id,{comment})
    const {response,json} = await request(url,options)
    if(response.ok) {
      setComment('')
      setComments((comments => [...comments, json]))
    }
    
  }

  return (
    <form onSubmit={commentPost} className={styles.commentForm}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        placeholder="Escreva seu comentário..."
      />
      <button className={styles.btn}>
        <Enviar />
      </button>
      <Error error={error}/>
    </form>
  );
};

export default PhotoCommentsForm;
