// import { BiBasketball } from "react-icons/bi";
import { BiBasketball } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="header-content">
                    <a href="" className="logo">LOGO</a>
                    <nav className="header-content__nav">
                        <ul className="header-content__menu">
                            <li className="header-content__menu__item"><a href="">Home</a></li>
                            <li className="header-content__menu__item"><a href="">Campeões</a></li>
                            <li className="header-content__menu__item"><a href="">Jogadores</a></li>
                            <li className="header-content__menu__item"><a href="">Jogadas</a></li>
                        </ul>
                    </nav>
                    <div className="interact">
                        <a href=""><button className="btn">Entrar</button></a>
                        <BiBasketball/>
                        <BiChevronDown/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;