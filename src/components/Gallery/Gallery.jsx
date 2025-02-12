const Gallery = () => {
    return (
        <>
            <section className="gallery">
                <div className="gallery__text">
                    <h2>Nossa galeria está sempre aberta pra você</h2>
                    <button className="btn">Ver na galeria</button>
                </div>
                <div className="gallery__images">
                    <img src="./src/assets/images/gallery/lebron.png" alt="Lebron James - Jogador da NBA" />
                    <img src="./src/assets/images/gallery/luka.png" alt="Luka Doncic - Jogador da NBA" />
                    <img src="./src/assets/images/gallery/curry.png" alt="Stephen Curry - Jogador da NBA" />
                </div>
            </section>
        </>
    )
}

export default Gallery;