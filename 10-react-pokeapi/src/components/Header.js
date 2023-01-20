import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <Link to="/">
              <img src="./pokelogo.png" width="70" alt="pokelogo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <Link
                    class="nav-link text-white active"
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="/pokemons">
                    Pokemons
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
