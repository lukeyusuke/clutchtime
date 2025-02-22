import PlayersCards from "./PlayersCards";
import styles from './Players.module.css';

const Players = () => {
    return (
        <>
            <section id={styles.players}>
                <div className={styles.playersContent}>
                    <div className={styles.playersContent__text}>
                        <h1>JOGADORES</h1>
                        <h2>ALGUNS DOS MELHORES<br/> JOGADORES DO MUNDO</h2>
                    </div>
                    <div className={styles.playersContent__box}>
                        <PlayersCards image='./src/assets/images/players/shai.png' text='Shai Gilgeous-Alexander - Jogador da NBA' name='Shai Gilgeous' last_name='ALEXANDER' height='1.98' weight='88kg' position='Armador' dt_birth='12/07/1998' age='26' from='Toronto, Canadá'/>
                        <PlayersCards image='./src/assets/images/players/antman.png' text='Anthony Edwards - Jogador da NBA' name='Anthony' last_name='EDWARDS' height='1.93' weight='102kg' position='Ala-armador' dt_birth='05/08/2001' age='23' from='Geórgia, EUA'/>
                        <PlayersCards image='./src/assets/images/players/lamelo.png' text='LaMelo Ball - Jogador da NBA' name='LaMelo' last_name='BALL' height='2.01' weight='82kg' position='Armador' dt_birth='22/08/2001' age='23' from='Califórnia, EUA'/>
                        <PlayersCards image='./src/assets/images/players/morant.png' text='Ja Morant - Jogador da NBA' name='Ja' last_name='MORANT' height='1.88' weight='79kg' position='Armador' dt_birth='10/08/1999' age='25' from='Carolina do Sul, EUA'/>
                    </div>
                </div>
            </section>
            <div className={styles.carousel}>
                <img src="./src/assets/images/lines/line.png" alt="Lista com nome de jogadores"/>
                <img src="./src/assets/images/lines/line2.png" alt="Lista com nome de jogadores"/>
            </div>
        </>
    )   
}

export default Players;