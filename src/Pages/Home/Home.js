import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Head from '../../Components/Helper/Head'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="" description="A maior rede social animal do Brasil!!"/>
      <div className={styles.nada}></div>
      <Feed/>
    </section>
  )
}

export default Home
