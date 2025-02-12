import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const Plays = () => {
    return (
        <>
            <section className="home">
                <div className="home-main-text">
                    <h1>JOGADAS</h1>
                    <h2>JOGADAS INCRÍVEIS DA TEMPORADA</h2>
                    <p>Os melhores jogadores, os maiores campeões e todas as histórias<br/> que já passaram pela quadra, chegou a hora da bola laranja subir!!  </p>
                </div>
                <div className="plays">
                    <img src="./src/assets/images/plays/play2.png" alt="Vídeo da jogada 1"/>
                    <img src="./src/assets/images/plays/play1.png" alt="Vídeo da jogada 2"/>
                    <img src="./src/assets/images/plays/play2.png" alt="Vídeo da jogada 3"/>
                </div>
                <div className="buttons">
                    <BiChevronLeft/>
                    <BiChevronRight/>
                </div>
            </section>
        </>
    )
}

export default Plays;