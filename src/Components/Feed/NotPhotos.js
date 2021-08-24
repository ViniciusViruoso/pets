import React from 'react'
import styles from "./NotPhotos.module.css";

const NotPhotos = () => {
  return (
    <section className={styles.NotPhotos}>
      <div>
        <div className={styles.triste}></div>
        <h2>Sem fotos para mostrar aqui.</h2>
      </div>
    </section>
  )
}

export default NotPhotos
