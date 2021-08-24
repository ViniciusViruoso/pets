import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={`${styles.divFooter} container`}>
        <div>
          Projeto feito no curso de React JS completo
          <a
            className={styles.linkFooter}
            href="https://www.origamid.com/"
            target="_blank"
            rel="noreferrer"
          >
            Origamid
          </a>
        </div>
        <div className={styles.footerSocial}>
          <p>Vinicius Virtuoso | </p>
          <a
            href="https://github.com/ViniciusViruoso"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.facebook.com/vinicius.eduardo.121398/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/vini.e.v/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
          <p> | </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
