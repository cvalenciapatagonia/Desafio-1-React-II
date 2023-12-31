import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom bg-danger">
          <div className="container">
            <Link className="navbar-brand" to="/">Happy Cake 🎂</Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <Link className="nav-link active text-light" to="/home">🏠Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-light" to="/contacto">📲Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
