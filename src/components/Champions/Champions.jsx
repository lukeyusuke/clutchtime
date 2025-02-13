import ChampionsCards from "./ChampionsCards";
import styles from './Champions.module.css';

const Champions = () => {
    return (
        <>
            <section id={styles.champions}>
                <div className={styles.championsContent}>
                    <div className={styles.championsContent__text}>
                        <h1 className={styles.champions__title}>CAMPEOES</h1>
                        <h2> OS TIMES COM<br/> MAIS TÍTULOS</h2>
                        <p>As maiores equipes da NBA estão de volta, agora mais do nunca<br/>, As maiores equipes daão de volta, agora mais fortes do que </p>
                    </div>
                    <div className={styles.championsContent__box}>
                        <ChampionsCards champs={17} image='./src/assets/images/champions/lakers.svg' text='Logo do Los Angeles Lakers - Time da NBA'/>
                        <ChampionsCards champs={18} image='./src/assets/images/champions/celtics.svg' text='Logo do Boston Celtics - Time da NBA'/>
                        <ChampionsCards champs='07' image='./src/assets/images/champions/golden.svg' text='Logo do Golden State Warriors - Time da NBA'/>
                        <ChampionsCards champs='06' image='./src/assets/images/champions/bulls.svg' text='Logo do Chicago Bulls - Time da NBA'/>
                        <ChampionsCards champs='05' image='./src/assets/images/champions/spurs.svg' text='Logo do San Antonio Spurs - Time da NBA'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Champions;