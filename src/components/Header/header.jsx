import { BiBasketball } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={styles.headerContent}>
                    <a href="#" className={styles.logo}>LOGO</a>
                    <nav className="header-content__nav">
                        <ul className={styles.headerContent__menu}>
                            <li className={styles.headerContent__menu__item}><a href="">Home</a></li>
                            <li className={styles.headerContent__menu__item}><a href="">Campeões</a></li>
                            <li className={styles.headerContent__menu__item}><a href="">Jogadores</a></li>
                            <li className={styles.headerContent__menu__item}><a href="">Jogadas</a></li>
                        </ul>
                    </nav>
                    <div className={styles.interact}>
                        <a href="#"><button className={styles.btn}>ENTRAR</button></a>
                        <div className={styles.changeLanguage}>
                            <BiBasketball className={styles.BiBasketball}/>
                            <BiChevronDown className={styles.BiChevronDown}/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;