import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Card({
  name,
  avatar,
  id,
  openModal,
}) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={avatar} class="card-img-top" alt={name} data-bs-toggle="modal" data-bs-target={`#id${id}`}/>
        <div class="card-body">
          <h5 class="card-title text-center">{name}</h5>
        </div>
      </div>
    </>
  );
}

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [urlPoke, setUrlPoke] = useState("https://pokeapi.co/api/v2/pokemon");
  const [next, setNext] = useState("");

  useEffect(() => {
    const getPokemons = async (url) => {
      try {
        let res = await fetch(url),
          json = await res.json();
        setNext(json.next);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        json.results.forEach(async (el) => {
          let res = await fetch(el.url),
            dataPoke = await res.json();
          let pokeInfo = {
            name: dataPoke.name,
            id: dataPoke.id,
            img: dataPoke.sprites.front_default,
          };
          setPokemon((pokemon) => [...pokemon, pokeInfo]);
        });
      } catch (err) {
        let infoError = err.statusText || `Error en el enlace`;
        let pokeError = {
          errorNum: err.status,
          url: infoError,
        };
        setPokemon(pokeError);
      }
    };

    getPokemons(urlPoke);
  }, [urlPoke]);
  return (
    <>
      <button
        className="btn btn-primary mx-auto w-25 my-3 d-block position-fixed z-1"
        onClick={() => setUrlPoke(next)}
      >
        VER MAS POKEMONS...
      </button>
      <div className="container">
        <nav className="my-5 row">
          {pokemon.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            pokemon.map((el) => (
              <>
                <Card
                  name={el.name}
                  avatar={el.img}
                />
              </>
            ))
          )}
        </nav>
      </div>
      <Footer />
    </>
  );
};

export default Pokemons;
