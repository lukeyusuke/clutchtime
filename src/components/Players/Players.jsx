import styles from './Players.module.scss';
import shai from '../../assets/images/players/shai.png';
import edwards from '../../assets/images/players/antman.png';
import lamelo from '../../assets/images/players/lamelo.png';
import morant from '../../assets/images/players/morant.png';
import { motion } from 'framer-motion';
import PlayersCards from "./PlayersCards";

const Players = () => {
    return (
        <>
            <motion.section id='players' className={styles.players} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
                <div className={styles.playersContent}>
                    <motion.div className={styles.playersContent__text} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
                        <h1>JOGADORES</h1>
                        <h2>ALGUNS DOS MELHORES<br /> JOGADORES DO MUNDO</h2>
                    </motion.div>

                    <motion.div className={styles.playersContent__box} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: .8, delay: 0.3 }}>
                        <PlayersCards image={shai} text='Shai Gilgeous-Alexander - Jogador da NBA' name='Shai Gilgeous' last_name='ALEXANDER' height='1.98' weight='88kg' position='Armador' dt_birth='12/07/1998' age='26' from='Toronto, Canadá'/>
                        <PlayersCards image={edwards} text='Anthony Edwards - Jogador da NBA' name='Anthony' last_name='EDWARDS' height='1.93' weight='102kg' position='Ala-armador' dt_birth='05/08/2001' age='23' from='Geórgia, EUA'/>
                        <PlayersCards image={lamelo} text='LaMelo Ball - Jogador da NBA' name='LaMelo' last_name='BALL' height='2.01' weight='82kg' position='Armador' dt_birth='22/08/2001' age='23' from='Califórnia, EUA'/>
                        <PlayersCards image={morant} text='Ja Morant - Jogador da NBA' name='Ja' last_name='MORANT' height='1.88' weight='79kg' position='Armador' dt_birth='10/08/1999' age='25' from='Carolina do Sul, EUA'/>
                    </motion.div>
                </div>
            </motion.section>

            <motion.div className={styles.carousel} initial={{ opacity: 0}} whileInView={{opacity: 1}} transition={{ duration: .8}}>
                <motion.img className={styles.carousel__names} src="./src/assets/images/lines/line.png" alt="Lista com nome de jogadores" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8}}/>
                <motion.img className={styles.carousel__names} src="./src/assets/images/lines/line2.png" alt="Lista com nome de jogadores" initial={{ opacity: 0, x: -100 }} whileInView={{opacity: 1, x: 0}} animate={{ opacity: 1 }} transition={{ duration: .8}}/>
            </motion.div>
        </>
    );
}

export default Players;
