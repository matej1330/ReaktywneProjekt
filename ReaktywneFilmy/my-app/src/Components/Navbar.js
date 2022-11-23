import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Components/logo.png';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="Logo" height="50" width="50"/>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Strona główna</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Dodawanie filmów</a>
      </li>
      <li class="nav-item">
      <input class="form-control mr-sm-2" type="search" placeholder="Nazwa filmu" aria-label="Search"/>
      </li>
      <li class="nav-item">
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Szukaj</button>
      </li>
    </ul>
    </div>
    <div className="register">
    <button type="button" class="btn btn-warning">Logowanie</button>
    <button type="button" class="btn btn-secondary">Rejestracja</button>
    </div>
</nav>

    )
}

export default Navbar;