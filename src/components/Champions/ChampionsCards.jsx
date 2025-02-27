import styles from './Champions.module.scss';

const ChampionsCards = ({champs, image, text}) => {
    return (
        <>
            <div className={styles.championsContent__box__stats}>
                <span>{champs}</span>
                <img src={image} alt={text}/>
            </div>
        </>
    )
}

export default ChampionsCards;