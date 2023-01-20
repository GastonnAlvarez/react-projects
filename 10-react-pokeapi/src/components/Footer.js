import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-dark">
      <div className="container">
        <nav className="row">
          <Link
            to="/"
            className="col-12 col-md-3 d-flex aling-items-center justify-content-center"
          >
            <img src="./pokelogo.png" alt="Pokelogo" width="120" />
          </Link>
          <ul className="col-12 col-md-3">
            <li className="font-weight-bold list-unstyled text-center">
              Pokemon
            </li>
            <li className="text-center list-unstyled">
              En este sitio web podras encontrar informacion sobre tus pokemons
              favoritos.
            </li>
          </ul>
          <ul className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
            <li className="font-weight-bold list-unstyled">Enlaces</li>
            <Link to="pokemons" className="my-3 text-reset">
              Pokemons
            </Link>
          </ul>
          <ul className="col-12 col-md-3">
            <li className="font-weight-bold list-unstyled text-center">
              Siguenos
            </li>
            <div className="d-flex justify-content-between align-items-center fs-3 w-100">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-youtube"></i>
            </div>
          </ul>
          <p className="text-center border-top">
            Pagina Hecha por Gaston Alejandro Alvarez &copy;
          </p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
