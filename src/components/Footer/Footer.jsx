import styles from './Footer.module.css';
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoDiscord } from "react-icons/bi";
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <>
            <motion.footer id={styles.footer} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <div className={styles.footerContent}>
                    <motion.div className={styles.footerContent__text} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1>AGORA É SUA VEZ DE<br /> ENTRAR EM QUADRA</h1>
                        <p>Os melhores jogadores, os maiores campeões e todas as histórias<br /> que já passaram pela quadra, chegou a hora da bola laranja subir!!</p>
                    </motion.div>

                    <motion.div className={styles.footerContent__socialMedias} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                        <a href='https://www.linkedin.com/in/lukeyusuke/'><BiLogoLinkedin className={styles.footerContent__socialMedias__logo} /></a>
                        <a href=""><BiLogoGmail className={styles.footerContent__socialMedias__logo} /></a>
                        <a href=""><BiLogoDiscord className={styles.footerContent__socialMedias__logo} /></a>
                    </motion.div>

                    <motion.p className={styles.rights} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <p>Todos os direitos reservados. Feito por <b>Luke Yusuke</b></p>
                    </motion.p>

                    <motion.div className={styles.carouselPlayers} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
                        <img className={styles.carouselPlayers__box} src="./src/assets/images/footer/line.png" alt="Lista de jogadores de basquete" />
                        <img className={styles.carouselPlayers__box} src="./src/assets/images/footer/line2.png" alt="Lista de jogadores de basquete" />
                    </motion.div>
                </div>
            </motion.footer>
        </>
    );
}

export default Footer;