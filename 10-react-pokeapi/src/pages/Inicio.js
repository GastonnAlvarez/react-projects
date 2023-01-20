import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <>
      <main>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner carousel">
            <div class="carousel-item active">
              <img
                src="./pokeimg/carousel-1.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="./pokeimg/carousel-2.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="./pokeimg/carousel-3.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <h1 className="text-center bg-dark text-white">Pokemon</h1>
          <p className="fw-bold fs-5">
            Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese
            media franchise managed by The Pokémon Company, founded by Nintendo,
            Game Freak, and Creatures. The franchise was created by Satoshi
            Tajiri in 1996,[4] and is centered around fictional creatures called
            "Pokémon". In Pokémon, Pokémon Trainers are people who catch, train,
            care for, and battle with Pokémon. The English slogan for the
            franchise is "Gotta Catch ‘Em All!". There are currently 1008
            Pokémon species.
          </p>
          <p className="fw-bold fs-5">
            The Pokémon franchise began as Pocket Monsters: Red and Green (later
            released outside of Japan as Pokémon Red and Blue), a pair of video
            games for the original Game Boy handheld system that were developed
            by Game Freak and published by Nintendo in February 1996. Pokémon
            soon became a media mix franchise adapted into various different
            media, with the Pokémon Trading Card Game released in October 1996,
            the Pokémon Adventures manga first released in Japan in March 1997,
            and the Pocket Monsters: Original Series released in April 1997.
            Pocket Pikachu was released in Japan in March 1998, with the July
            18: with the first ever Pokémon film, Pokémon: The First Movie,
            first released in Japan in July 1998.
          </p>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Inicio;
