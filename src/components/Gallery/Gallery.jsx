import styles from './Gallery.module.css';

const Gallery = () => {
    return (
        <>
            <section id={styles.gallery}>
                <div className={styles.galleryContent}>
                    <div className={styles.galleryContent__text}>
                        <h2>Nossa galeria está<br/> sempre aberta pra você</h2>
                        <button className="btn">VER NA GALERIA</button>
                    </div>
                    <img src="./src/assets/images/Gallery/images.png" alt="Jogadores da NBA" />
                </div>
            </section>
        </>
    )
}

export default Gallery;