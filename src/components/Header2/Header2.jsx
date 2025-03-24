import styles from './Header2.module.scss';
import BrazilFlag from '../../assets/images/header/brazil.png';
import EnglishFlag from '../../assets/images/header/uk.png';
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language || 'pt');

    const toggleMenu = () => {
        setMenuActive(prevState => !prevState);
    }

    const toggleDropdown = () => {
        setDropdownActive(prevState => !prevState);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
        setDropdownActive(false);
    };
    
    const { t } = useTranslation();

    return (
        <>
            <motion.header id={styles.header} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .8 }}>
                <div className={styles.headerContent}>
                    <motion.a href='' className={styles.logo} initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}  whileInView={{ opacity: 1, y:0 }}>{t('header.logo')}</motion.a>
                    <nav className={`${styles.headerContent__nav} ${menuActive ? styles.active : styles.close}`}>
                        <ul className={styles.headerContent__menu}>
                            <li className={styles.headerContent__menu__item}><a href="#home">{t('header.nav.home')}</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#champions">{t('header.nav.champions')}</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#gallery">{t('header.nav.gallery')}</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#players">{t('header.nav.players')}</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#plays">{t('header.nav.plays')}</a></li>
                        </ul>
                    </nav>

                    <div className={styles.interact}>
                        <a href="#">
                            <motion.button className={styles.btn} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: .6 }}>{t('header.button')}</motion.button>
                        </a>
                        <BiMenu className={styles.BiMenu} onClick={toggleMenu}/>

                        <div className={styles.changeLanguage}>
                            <motion.div className={styles.changeLanguage__flag} onClick={toggleDropdown} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <img src={currentLang === "pt" ? BrazilFlag : EnglishFlag} alt="Flag" />
                                <BiChevronDown className={styles.BiChevronDown}/>
                            </motion.div>

                            <motion.div className={`${styles.dropdown} ${dropdownActive ? styles.active : ''}`} initial={{ opacity: 0 }} animate={{ opacity: dropdownActive ? 1 : 0 }} transition={{ duration: 0.3 }}>
                                <ul>
                                    <li onClick={() => changeLanguage('pt')}>{t('header.language.pt')}</li>
                                    <li onClick={() => changeLanguage('en')}>{t('header.language.en')}</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.header>
        </>
    )
}

export default Header;
