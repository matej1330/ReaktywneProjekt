import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Components/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="Logo" height="50" width="50" />
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" className="nav-link" href="#">
              Strona główna
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="add" className="nav-link" href="#">
              Dodawanie filmów
            </Link>
          </li>
          <li class="nav-item">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Nazwa filmu"
              aria-label="Search"
            />
          </li>
          <li class="nav-item">
            <Link
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
            >
              Szukaj
            </Link>
          </li>
        </ul>
      </div>
      <div className="register">
        <Link to="signin" type="button" className="btn btn-warning">
          Logowanie
        </Link>
        <Link to="signup" type="button" className="btn btn-secondary">
          Rejestracja
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
