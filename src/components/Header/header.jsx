import { BiBasketball } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import styles from './Header.module.css';
import { useState } from "react";

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
            <header id={styles.header}>
                <div className={styles.headerContent}>
                    <a href="" className={styles.logo}>LOGO</a>
                    <nav className={`${styles.headerContent__nav} ${menuActive ? styles.active : styles.close}`}>
                        <ul className={styles.headerContent__menu}>
                            <li className={styles.headerContent__menu__item}><a href="#home">Home</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#champions">Campeões</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#players">Jogadores</a></li>
                            <li className={styles.headerContent__menu__item}><a href="#plays">Jogadas</a></li>
                        </ul>
                    </nav>
                    <div className={styles.interact}>
                        <a href="#"><button className={styles.btn}>ENTRAR</button></a>
                        <BiMenu className={styles.BiMenu} onClick={toggleMenu}/>
                        <div className={styles.changeLanguage}>
                            <div className={styles.changeLanguage__flag} onClick={toggleDropdown}>
                                <img src='./src/assets/images/header/brazil.png'></img>
                                <BiChevronDown className={styles.BiChevronDown}/>
                            </div>
                            <div className={`${styles.dropdown} ${dropdownActive ? styles.active : ''}`}>
                                <ul>
                                    <li>Português</li>
                                    <li>English</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;