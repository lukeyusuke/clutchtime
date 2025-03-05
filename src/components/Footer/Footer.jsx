import styles from './Footer.module.scss';
import line from '../../assets/images/footer/line.png';
import line2 from '../../assets/images/footer/line2.png';
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoDiscord } from "react-icons/bi";
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.footer id={styles.footer} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <div className={styles.footerContent}>
                    <motion.div className={styles.footerContent__text} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1><Trans i18nKey='footer.title' components={[<br/>]}/></h1>
                        <p>{t('footer.contact')}</p>
                    </motion.div>

                    <motion.div className={styles.footerContent__socialMedias} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                        <a href='https://www.linkedin.com/in/lukeyusuke/'><BiLogoLinkedin className={styles.footerContent__socialMedias__logo} /></a>
                        <a href=""><BiLogoGmail className={styles.footerContent__socialMedias__logo} /></a>
                        <a href=""><BiLogoDiscord className={styles.footerContent__socialMedias__logo} /></a>
                    </motion.div>

                    <motion.p className={styles.rights} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
                        <Trans i18nKey="footer.rights" components={{ b: <b /> }} />
                    </motion.p>

                    <motion.div className={styles.carouselPlayers} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
                        <img className={styles.carouselPlayers__box} src={line} alt="Lista de jogadores de basquete" />
                        <img className={styles.carouselPlayers__box} src={line2} alt="Lista de jogadores de basquete" />
                    </motion.div>
                </div>
            </motion.footer>
        </>
    );
}

export default Footer;