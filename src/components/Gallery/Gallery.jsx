import styles from './Gallery.module.scss';
import galleryImg from '../../assets/images/Gallery/images.png' 
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <motion.section id='gallery' className={styles.gallery} initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: .8 }}>
            <div className={styles.galleryContent}>
                <div className={styles.galleryContent__text}>
                    <h2> Nossa galeria está<br /> sempre aberta pra você</h2>
                    <button className="btn"> VER NA GALERIA</button>
                </div>
                <motion.img src={galleryImg} alt="Jogadores da NBA" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  transition={{ duration: 0.8 }}/>
            </div>
        </motion.section>
    );
};

export default Gallery;