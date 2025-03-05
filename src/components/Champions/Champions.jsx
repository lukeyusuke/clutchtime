import styles from './Champions.module.scss';
import ChampionsCards from "./ChampionsCards";
import celtics from '../../assets/images/champions/celtics.svg';
import lakers from '../../assets/images/champions/lakers.svg';
import warriors from '../../assets/images/champions/golden.svg';
import bulls from '../../assets/images/champions/bulls.svg';
import spurs from '../../assets/images/champions/spurs.svg';
import { motion } from "framer-motion";
import { Trans, useTranslation } from 'react-i18next';

const Champions = () => {
    const { t } = useTranslation();
    return (
        <motion.section id='champions' className={styles.champions} initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: .8 }}>
            <div className={styles.championsContent}>
                <motion.div className={styles.championsContent__text} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8 }}>
                    <h1 className={styles.champions__title}>{t('champions.title')}</h1>
                    <h2><Trans i18nKey='champions.subtitle' components={[<br/>]}/></h2>
                    <p><Trans i18nKey='champions.description' components={[<br/>]}/></p>
                </motion.div>

                <motion.div className={styles.championsContent__box } initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <ChampionsCards champs={18} image={celtics} text={t('champions.teams.celtics')}/>
                    <ChampionsCards champs={17} image={lakers} text={t('champions.teams.lakers')}/>
                    <ChampionsCards champs='07' image={warriors} text={t('champions.teams.warriors')}/>
                    <ChampionsCards champs='06' image={bulls} text={t('champions.teams.bulls')}/>
                    <ChampionsCards champs='05' image={spurs} text={t('champions.teams.spurs')}/>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Champions;