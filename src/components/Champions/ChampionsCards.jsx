const ChampionsCards = ({champs, image, text}) => {
    return (
        <>
            <div className="champions-box__content">
                <span>{champs}</span>
                <img src={image} alt={text}/>
            </div>
        </>
    )
}

export default ChampionsCards;