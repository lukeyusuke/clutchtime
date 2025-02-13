import ChampionsCards from "./ChampionsCards";
import styles from './Champions.module.css'

const Champions = () => {
    return (
        <>
            <section className='champions'>
                <div className="champions-text">
                    <h1>CAMPEÕES</h1>
                    <h2> Os times com mais títulos</h2>
                    <p>As maiores equipes da NBA estão de volta, agora mais fortes do que nunca </p>
                </div>
                <div className="champions-box">
                    <ChampionsCards champs={17} image='./src/assets/images/champions/lakers.svg' text='Logo do Los Angeles Lakers - Time da NBA'/>
                    <ChampionsCards champs={18} image='./src/assets/images/champions/celtics.svg' text='Logo do Boston Celtics - Time da NBA'/>
                    <ChampionsCards champs={7} image='./src/assets/images/champions/golden.svg' text='Logo do Golden State Warriors - Time da NBA'/>
                    <ChampionsCards champs={6} image='./src/assets/images/champions/bulls.svg' text='Logo do Chicago Bulls - Time da NBA'/>
                    <ChampionsCards champs={5} image='./src/assets/images/champions/spurs.svg' text='Logo do San Antonio Spurs - Time da NBA'/>
                </div>
            </section>
        </>
    )
}

export default Champions;