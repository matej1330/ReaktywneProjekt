import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div class="main">
        <div class="contentRegister">
          <p class="fixName">Rejestracja</p>
          <div class="fixRegister">
            <form class="fixRegister">
              <label for="login">Login</label>
              <input
                type="text"
                id="login"
                name="login"
                class="fixInputRegister"
              ></input>
              <label for="name">Nazwa</label>
              <input
                type="text"
                id="name"
                name="name"
                class="fixInputRegister"
              ></input>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="fixInputRegister"
              ></input>
              <label for="password">Hasło</label>
              <input
                type="password"
                id="password"
                name="password"
                class="fixInputRegister"
              ></input>
            </form>
          </div>
          <div class="fixButtonRegister">
            <button className="btn btn-warning">Załóż konto</button>
            <Link to="/" className="btn btn-secondary">
              Powrót
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
