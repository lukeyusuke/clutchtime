import styles from './Header.module.scss';
import BrazilFlag from '../../assets/images/header/brazil.png';
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { motion } from 'framer-motion';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(prevState => !prevState);
    }

    const toggleDropdown = () => {
        setDropdownActive(prevState => !prevState);
    }

    return (
        <>
            <motion.header id={styles.header} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <div className={styles.headerContent}>
                    <motion.a href='' className={styles.logo} initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}  whileInView={{ opacity: 1, y:0 }}> LOGO </motion.a>
                    <nav className={`${styles.headerContent__nav} ${menuActive ? styles.active : styles.close}`}>
                        <ul className={styles.headerContent__menu}>
                            <li className={styles.headerContent__menu__item}><a href="#home">Home</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#champions">Campeões</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#gallery">Galeria</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#players">Jogadores</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#plays">Jogadas</a></li>
                        </ul>
                    </nav>

                    <div className={styles.interact}>
                        <a href="#">
                            <motion.button className={styles.btn} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: .6 }}> ENTRAR </motion.button>
                        </a>
                        <BiMenu className={styles.BiMenu} onClick={toggleMenu} />

                        <div className={styles.changeLanguage}>
                            <motion.div className={styles.changeLanguage__flag} onClick={toggleDropdown} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <img src={BrazilFlag} alt="Brazil Flag" />
                                <BiChevronDown className={styles.BiChevronDown} />
                            </motion.div>

                            <motion.div className={`${styles.dropdown} ${dropdownActive ? styles.active : ''}`} initial={{ opacity: 0 }} animate={{ opacity: dropdownActive ? 1 : 0 }} transition={{ duration: 0.3 }}>
                                <ul>
                                    <li>Português</li>
                                    <li>English</li>
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

