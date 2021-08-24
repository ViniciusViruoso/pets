import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { UserContext } from '../../UserContext'

const Header = () => {
  const {data} = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to='/' className={styles.logo}>
          <div className={styles.petsImg}></div>
        </Link>
        {data ? (
          <Link to='/conta' className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to='/login' className={styles.login}>
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
