import styles from './Home.module.css'

const Home = () => {
    return (
        <>
            <section id={styles.home}>
                <div className={styles.homeContent}>
                    <div className={styles.homeContent__text}>
                        <h1>O BASQUETE SE <br/>ENCONTRA AQUI</h1>
                        <p> Os maiores jogadores, os maiores campeões e todas as histórias<br/>que já passaram pela quadra, chegou a hora da bola laranja subir</p>
                    </div>
                    <button className={styles.btn}> Mais sobre o esporte</button>
                </div>
            </section>
        </>
    )
}

export default Home;