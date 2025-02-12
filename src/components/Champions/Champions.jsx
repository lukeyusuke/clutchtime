const Champions = () => {
    return (
        <>
            <section className="champions">
                <h1>CAMPEÕES</h1>
                <h2> Os times com mais títulos</h2>
                <p>As maiores equipes da NBA estão de volta, agora mais fortes do que nunca </p>
                <div className="champions-box">
                    <div className="champions-box__celtics">
                        <span>18</span>
                        <img src="./src/assets/images/champions/celtics.svg" alt="Logo do Boston Celtics - Time da NBA"/>
                    </div>
                    <div className="champions-box__lakers">
                        <span>17</span>
                        <img src="./src/assets/images/champions/lakers.svg" alt="Logo do Los Angeles Lakers - Time da NBA"/>
                    </div>
                    <div className="champions-box__golden-state">
                        <span>7</span>
                        <img src="./src/assets/images/champions/golden.svg" alt="Logo do Golden State Warriors - Time da NBA"/>
                    </div>
                    <div className="champions-box__bulls">
                        <span>6</span>
                        <img src="./src/assets/images/champions/bulls.svg" alt="Logo do Chicago Bulls - Time da NBA"/>
                    </div>
                    <div className="champions-box__spurs">
                        <span>5</span>
                        <img src="./src/assets/images/champions/spurs.svg" alt="Logo do San Antonio Spurs - Time da NBA"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Champions;