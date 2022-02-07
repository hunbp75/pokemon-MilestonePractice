import PokemonList from "./components/PokemonList";
import SearchForm from "./components/SearchForm";
import pokemons from "./pokedex.json";
import Pokemon from "./components/Pokemon";
import "./App.css";

function App() {
  const first50el = pokemons.pokemon.slice(0, 50);
  console.log(first50el);
  return (
    <div className="App">
      <PokemonList pokemons={first50el} />
    </div>
  );
}

export default App;
