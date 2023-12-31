import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div>
        {/* Navbar
        <Link to="/login">Login</Link>
        <Link to="/registro">Registro</Link> */}
              <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
          <div className="container">
            <p className="display-5 fw-bold text-dark logo-img">
              Festiday🌶️
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#"></a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark"
                    aria-current="page"
                    href="#Function-container"
                  >
                    Funciones
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark"
                    href="#app-demo"
                  >
                    Demo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-dark" href="#Contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </div>
    </>
  );
}
