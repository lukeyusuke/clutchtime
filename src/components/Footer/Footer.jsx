import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <h1>Agora é sua vez de entrar em quadra</h1>
                <p> Os melhores jogadores, os maiores campeões e todas as histórias<br/> que já passaram pela quadra, chegou a hora da bola laranja subir!!</p>
                <div className="footer__social-medias">
                    <BiLogoLinkedin/>
                    <BiLogoGmail/>
                    <BiLogoInstagram/>
                </div>
                <p> Todos os direitos reservados. Feito por <b>Luke Yusuke</b></p>
                <div className="carousel-players">
                    <img src="./src/assets/images/footer/line.png" alt="Lista de jogadores de basquete"/>
                    <img src="./src/assets/images/footer/line2.png" alt="Lista de jogadores de basquete"/>
                </div>
            </footer>
        </>
    )
}

export default Footer;