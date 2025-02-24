import { motion } from "framer-motion";
import ChampionsCards from "./ChampionsCards";
import styles from './Champions.module.css';

const Champions = () => {
    return (
        <motion.section id='champions' className={styles.champions} initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: .8 }}>
            <div className={styles.championsContent}>
                <motion.div className={styles.championsContent__text} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8 }}>
                    <h1 className={styles.champions__title}>CAMPEOES</h1>
                    <h2>OS TIMES COM<br/> MAIS TÍTULOS</h2>
                    <p>As maiores equipes da NBA estão de volta, agora mais do nunca</p>
                </motion.div>

                <motion.div className={styles.championsContent__box } initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <ChampionsCards champs={18} image='./src/assets/images/champions/celtics.svg' text='Logo do Boston Celtics - Time da NBA'/>
                    <ChampionsCards champs={17} image='./src/assets/images/champions/lakers.svg' text='Logo do Los Angeles Lakers - Time da NBA'/>
                    <ChampionsCards champs='07' image='./src/assets/images/champions/golden.svg' text='Logo do Golden State Warriors - Time da NBA'/>
                    <ChampionsCards champs='06' image='./src/assets/images/champions/bulls.svg' text='Logo do Chicago Bulls - Time da NBA'/>
                    <ChampionsCards champs='05' image='./src/assets/images/champions/spurs.svg' text='Logo do San Antonio Spurs - Time da NBA'/>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Champions;