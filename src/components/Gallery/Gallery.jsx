import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const Gallery = () => {
    return (
        <motion.section id='gallery' className={styles.gallery} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.8 }}>
            <div className={styles.galleryContent}>
                <motion.div className={styles.galleryContent__text} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h2> Nossa galeria está<br /> sempre aberta pra você</h2>
                    <motion.button className="btn" initial={{ scale: 0 }} whileInView={{ scale: 1 }}  transition={{ duration: 0.5 }}> VER NA GALERIA
                    </motion.button>
                </motion.div>
                <motion.img src="./src/assets/images/Gallery/images.png" alt="Jogadores da NBA" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  transition={{ duration: 0.8 }}/>
            </div>
        </motion.section>
    );
};

export default Gallery;