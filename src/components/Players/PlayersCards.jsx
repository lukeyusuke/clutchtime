import styles from './Players.module.scss';
import { useTranslation } from 'react-i18next';

const PlayersCards = ({image, text, name, last_name ,height, weight, position, dt_birth, age, from}) => {
    const { t } = useTranslation();
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
                            <p>{t('playersCard.stats.height')}</p>
                            <span>{height}</span>
                        </div>
                        <div className={styles.playersContent__weight}>
                            <p>{t('playersCard.stats.weight')}</p>
                            <span>{weight}</span>
                        </div>
                    </div>
                    <div className={styles.playersContent__info__stats}>
                        <div>
                            <p>{t('playersCard.stats.position')}: {position}</p>
                            <p>{t('playersCard.stats.age')}: {age} {t('playersCard.stats.years')}</p>
                        </div>
                        <p>{t('playersCard.stats.born')}: {dt_birth}</p>
                        <p>{t('playersCard.stats.from')}: {from}</p>
                    </div>
                </div>
            </div>
        </>
    )   
}

export default PlayersCards;