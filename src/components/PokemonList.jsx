import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return (
    <div className="container">
      {props.pokemons.map((pokemon) => {
        return (
          <div className="card">
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              img={pokemon.img}
              type={pokemon.type}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
