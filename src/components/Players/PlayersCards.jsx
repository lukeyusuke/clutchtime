import styles from './Players.module.scss';

const PlayersCards = ({image, text, name, last_name ,height, weight, position, dt_birth, age, from}) => {
    return (
        <>
            <div className={styles.playersContent__stats}>
                <img src={image} alt={text}/>
                <div className={styles.playersContent__info}>
                    <div className={styles.playersContent__name}>
                        <h3>{name}</h3>
                        <h2>{last_name}</h2>
                    </div>
                    <div className={styles.playersContent__info__hw}>
                        <div className={styles.playersContent__height}>
                            <p> Altura </p>
                            <span>{height}</span>
                        </div>
                        <div className={styles.playersContent__weight}>
                            <p> Peso </p>
                            <span>{weight}</span>
                        </div>
                    </div>
                    <div className={styles.playersContent__info__stats}>
                        <div>
                        <p> Posição: {position}</p>
                        <p> Idade: {age} anos</p>
                        </div>
                        <p> Nasceu em: {dt_birth}</p>
                        <p> De: {from}</p>
                    </div>
                </div>
            </div>
        </>
    )   
}

export default PlayersCards;