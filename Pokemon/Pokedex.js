const Pokedex = ()=>{
    return (
        <div>
            {pokemonArr.map(el=>
            <Pokecard id={el.id} name={el.name} image={`${imageURL}${el.id}.png`} type={el.type}/>)}
        </div>
    )
}