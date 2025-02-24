import styles from './Home.module.css';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.section id='home' className={styles.home} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .8 }}>
            <motion.div className={styles.homeContent} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8 }}>
                <motion.div className={styles.homeContent__text}  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                    <h1>O BASQUETE SE <br/>ENCONTRA AQUI</h1>
                    <p> Os maiores jogadores, os maiores campeões e todas as histórias<br/>que já passaram pela quadra, chegou a hora da bola laranja subir</p>
                </motion.div>

                <motion.button className={styles.btn} initial={{scale: 0}} whileInView={{ scale: 1 }} transition={{ duration: .5 }}>
                    Mais sobre o esporte
                </motion.button>
            </motion.div>
        </motion.section>
    );
};

export default Home;
