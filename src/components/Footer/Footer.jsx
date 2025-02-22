import styles from './Footer.module.css';
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoDiscord } from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <footer id={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerContent__text}>
                        <h1>AGORA É SUA VEZ DE<br/> ENTRAR EM QUADRA</h1>
                        <p> Os melhores jogadores, os maiores campeões e todas as histórias<br/> que já passaram pela quadra, chegou a hora da bola laranja subir!!</p>
                    </div>
                    <div className={styles.footerContent__socialMedias}>
                        <a href='https://www.linkedin.com/in/lukeyusuke/'><BiLogoLinkedin className={styles.footerContent__socialMedias__logo}/></a>
                        <a href=""><BiLogoGmail className={styles.footerContent__socialMedias__logo}/></a>
                        <a href=""><BiLogoDiscord className={styles.footerContent__socialMedias__logo}/></a>
                    </div>
                    <p className={styles.rights}> Todos os direitos reservados. Feito por <b>Luke Yusuke</b></p>
                    <div className={styles.carouselPlayers}>
                        <img src="./src/assets/images/footer/line.png" alt="Lista de jogadores de basquete"/>
                        <img src="./src/assets/images/footer/line2.png" alt="Lista de jogadores de basquete"/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;