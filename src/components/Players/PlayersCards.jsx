const PlayersCards = ({image, text, name, last_name ,height, weight, position, dt_birth, age, from}) => {
    return (
        <>
            <img src={image} alt={text}/>
            <div className="players-box__info">
                <h2>{name}<br/>{last_name}</h2>
                <div className="players-box__info__hw">
                    <div className="players-box__info__height">
                        <p> Altura </p>
                        <span>{height}</span>
                    </div>
                    <div className="players-box__info__weight">
                        <p> Peso </p>
                        <span>{weight}</span>
                    </div>
                </div>
                <div className="players-box__info__stats">
                    <p> Posição: {position}</p>
                    <p> Nasceu em: {dt_birth}</p>
                    <p> Idade: {age}</p>
                    <p> De: {from}</p>
                </div>
            </div>
        </>
    )   
}

export default PlayersCards;