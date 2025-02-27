import styles from './Champions.module.scss';
import ChampionsCards from "./ChampionsCards";
import celtics from '../../assets/images/champions/celtics.svg';
import lakers from '../../assets/images/champions/lakers.svg';
import warriors from '../../assets/images/champions/golden.svg';
import bulls from '../../assets/images/champions/bulls.svg';
import spurs from '../../assets/images/champions/spurs.svg';
import { motion } from "framer-motion";

const Champions = () => {
    return (
        <motion.section id='champions' className={styles.champions} initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: .8 }}>
            <div className={styles.championsContent}>
                <motion.div className={styles.championsContent__text} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8 }}>
                    <h1 className={styles.champions__title}>CAMPEOES</h1>
                    <h2>OS TIMES COM<br/> MAIS TÍTULOS</h2>
                    <p>Os maiores campeões da NBA estão de volta, sempre<br/> trazendo emoção para dentro e fora das quadras</p>
                </motion.div>

                <motion.div className={styles.championsContent__box } initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <ChampionsCards champs={18} image={celtics} text='Logo do Boston Celtics - Time da NBA'/>
                    <ChampionsCards champs={17} image={lakers} text='Logo do Los Angeles Lakers - Time da NBA'/>
                    <ChampionsCards champs='07' image={warriors} text='Logo do Golden State Warriors - Time da NBA'/>
                    <ChampionsCards champs='06' image={bulls} text='Logo do Chicago Bulls - Time da NBA'/>
                    <ChampionsCards champs='05' image={spurs} text='Logo do San Antonio Spurs - Time da NBA'/>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Champions;