import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import styles from './Plays.module.css';

const Plays = () => {
    return (
        <>
            <section id={styles.plays}>
                <div className={styles.playsContent}>
                    <div className={styles.playsContent__text}>
                        <h1>JOGADAS</h1>
                        <h2>JOGADAS INCRÍVEIS<br/> DA TEMPORADA</h2>
                        <p>Os melhores jogadores, os maiores campeões e todas as histórias<br/>  </p>
                    </div>
                    <div className={styles.playsContent__plays}>
                        <img src="./src/assets/images/plays/play2.png" alt="Vídeo da jogada 1"/>
                        <img src="./src/assets/images/plays/play1.png" alt="Vídeo da jogada 2"/>
                        <img src="./src/assets/images/plays/play2.png" alt="Vídeo da jogada 3"/>
                    </div>
                    <div className={styles.buttons}>
                        <BiChevronLeft className={styles.buttons__style}/>
                        <BiChevronRight className={styles.buttons__style}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Plays;