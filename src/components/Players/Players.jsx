const Players = () => {
    return (
        <>
            <section className="players">
                <h1>JOGADORES</h1>
                <h2>ALGUNS DOS MELHORES JOGADORES DO MUNDO</h2>
                <div className="players-box">
                    <div className="players-box__style">
                        <img src="./src/assets/images/players/shai.png" alt="Shai Gilgeous-Alexander - Jogador da NBA"/>
                        <div className="players-box__info">
                            <h2> Shai Gilgeous <br/>ALEXANDER</h2>
                            <div className="players-box__info__hw">
                                <div className="players-box__info__height">
                                    <p> Altura </p>
                                    <span> 1.98 </span>
                                </div>
                                <div className="players-box__info__weight">
                                    <p> Peso </p>
                                    <span> 88kg </span>
                                </div>
                            </div>
                            <div className="players-box__info__stats">
                                <p> Posição: Armador </p>
                                <p> Nasceu em: 12/07/1998 </p>
                                <p> Idade: 26 anos </p>
                                <p> De: Toronto, Canadá </p>
                            </div>
                        </div>
                    </div>
                    <div className="players-box__style">
                        <img src="./src/assets/images/players/antman.png" alt="Anthony Edwards - Jogador da NBA"/>
                        <div className="players-box__info">
                            <h2> Anthony <br/>Edwards</h2>
                            <div className="players-box__info__hw">
                                <div className="players-box__info__height">
                                    <p> Altura </p>
                                    <span> 1.93 </span>
                                </div>
                                <div className="players-box__info__weight">
                                    <p> Peso </p>
                                    <span> 102kg </span>
                                </div> 
                            </div>
                            <div className="players-box__info__stats">
                                <p> Posição: Ala-Armador </p>
                                <p> Nasceu em: 05/08/2001 </p>
                                <p> Idade: 23 anos </p>
                                <p> De: Geórgia, EUA </p>
                            </div>
                        </div>
                    </div>
                    <div className="players-box__style">
                        <img src="./src/assets/images/players/lamelo.png" alt="LaMelo Ball - Jogador da NBA"/>
                        <div className="players-box__info">
                            <h2> LaMelo Ball <br/>Ball</h2>
                            <div className="players-box__info__hw">
                                <div className="players-box__info__height">
                                    <p> Altura </p>
                                    <span> 2.01 </span>
                                </div>
                                <div className="players-box__info__weight">
                                    <p> Peso </p>
                                    <span> 82kg </span>
                                </div> 
                            </div>
                            <div className="players-box__info__stats">
                                <p> Posição: Armador </p>
                                <p> Nasceu em: 22/08/2001 </p>
                                <p> Idade: 23 anos </p>
                                <p> De: Califórnia, EUA </p>
                            </div>
                        </div>
                    </div>
                    <div className="players-box__style">
                        <img src="./src/assets/images/players/morant.png" alt="Ja Morant - Jogador da NBA"/>
                        <div className="players-box__info">
                            <h2> Ja <br/>Morant</h2>
                            <div className="players-box__info__hw">
                                <div className="players-box__info__height">
                                    <p> Altura </p>
                                    <span> 1.88 </span>
                                </div>
                                <div className="players-box__info__weight">
                                    <p> Peso </p>
                                    <span> 79kg </span>
                                </div> 
                            </div>
                            <div className="players-box__info__stats">
                                <p> Posição: Armador </p>
                                <p> Nasceu em: 10/08/1999 </p>
                                <p> Idade: 25 anos </p>
                                <p> De: Carolina do Sul, EUA </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <img src="./src/assets/images/lines/line.png" alt="Lista com nome de jogadores"/>
                    <img src="./src/assets/images/lines/line2.png" alt="Lista com nome de jogadores"/>
                </div>
            </section>
        </>
    )   
}

export default Players;