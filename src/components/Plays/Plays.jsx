import styles from './Plays.module.scss';
import play1 from '../../assets/images/plays/play1.png';
import play2 from '../../assets/images/plays/play2.png';
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { motion } from 'framer-motion';

const Plays = () => {
    return (
        <>
            <motion.section id='plays' className={styles.plays} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className={styles.playsContent}>
                    <motion.div className={styles.playsContent__text} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h1>JOGADAS</h1>
                        <h2>JOGADAS INCRÍVEIS<br /> DA TEMPORADA</h2>
                        <p>Confira as jogas da temporada, onde cada<br/> talento se encontra em quadra</p>
                    </motion.div>

                    <motion.div className={styles.playsContent__plays} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <img src={play2} alt="Vídeo da jogada 1" />
                        <img src={play1} alt="Vídeo da jogada 2" />
                        <img src={play2} alt="Vídeo da jogada 3" />
                    </motion.div>

                    <motion.div className={styles.buttons} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <BiChevronLeft className={styles.buttons__style} />
                        <BiChevronRight className={styles.buttons__style} />
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}

export default Plays;
