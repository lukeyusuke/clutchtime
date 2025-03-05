import styles from './Players.module.scss';
import shai from '../../assets/images/players/shai.png';
import edwards from '../../assets/images/players/antman.png';
import lamelo from '../../assets/images/players/lamelo.png';
import morant from '../../assets/images/players/morant.png';
import { motion } from 'framer-motion';
import PlayersCards from "./PlayersCards";
import { Trans, useTranslation } from 'react-i18next';

const Players = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.section id='players' className={styles.players} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
                <div className={styles.playersContent}>
                    <motion.div className={styles.playersContent__text} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
                        <h1>{t('players.title')}</h1>
                        <h2><Trans i18nKey="players.subtitle" components={[<br/>]}/></h2>
                    </motion.div>

                    <motion.div className={styles.playersContent__box} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: .8, delay: 0.3 }}>
                        <PlayersCards image={shai} text={t('players.player_list.shai.description')} name={t('players.player_list.shai.name')} last_name={t('players.player_list.shai.last_name')} height={t('players.player_list.shai.height')} weight={t('players.player_list.shai.weight')} position={t('players.player_list.shai.position')} dt_birth={t('players.player_list.shai.birth_date')} age={t('players.player_list.shai.age')} from={t('players.player_list.shai.from')}/>
                        <PlayersCards image={edwards} text={t('players.player_list.edwards.description')} name={t('players.player_list.edwards.name')} last_name={t('players.player_list.edwards.last_name')} height={t('players.player_list.edwards.height')} weight={t('players.player_list.edwards.weight')} position={t('players.player_list.edwards.position')} dt_birth={t('players.player_list.edwards.birth_date')} age={t('players.player_list.edwards.age')} from={t('players.player_list.edwards.from')}/>
                        <PlayersCards image={lamelo} text={t('players.player_list.lamelo.description')} name={t('players.player_list.lamelo.name')} last_name={t('players.player_list.lamelo.last_name')} height={t('players.player_list.lamelo.height')} weight={t('players.player_list.lamelo.weight')} position={t('players.player_list.lamelo.position')} dt_birth={t('players.player_list.lamelo.birth_date')} age={t('players.player_list.lamelo.age')} from={t('players.player_list.lamelo.from')}/>
                        <PlayersCards image={morant} text={t('players.player_list.morant.description')} name={t('players.player_list.ja.name')} last_name={t('players.player_list.ja.last_name')} height={t('players.player_list.ja.height')} weight={t('players.player_list.ja.weight')} position={t('players.player_list.ja.position')} dt_birth={t('players.player_list.ja.birth_date')} age={t('players.player_list.ja.age')} from={t('players.player_list.ja.from')}/>
                        
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
