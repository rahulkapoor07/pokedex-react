const Pokecard = ({name, image, type})=>{
    return (
        <div className="card">
        <h3>{name}</h3>
        <img src={image}/>
        <p>Type: {type}</p>
        </div>
    )
}