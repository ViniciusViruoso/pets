import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhaFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserNavHeader.module.css";
import useMedia from "../../Hooks/useMedia";

const UserNavHeader = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu,setMobileMenu] = React.useState(false)

  const {pathname} = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  },[pathname])

  return (
    <>
    {mobile && 
      <button 
        aria-label='Menu' 
        onClick={() => setMobileMenu(!mobileMenu)}
        className={`${styles.mobileBtn} ${mobileMenu && styles.mobileBtnActive}`}
      ></button>
    }
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <MinhaFotos />
        {mobile && "Minha Fotos"}
      </NavLink>
      <NavLink to="estatisticas" activeClassName={styles.active}>
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="postar" activeClassName={styles.active}>
        <Adicionar />
        {mobile && "Poste Sua Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
    </>
  );
};

export default UserNavHeader;
