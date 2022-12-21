import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div class="main">
        <div class="content">
          <p class="fixName">Logowanie </p>
          <div class="fixLogin">
            <form class="fixLogin">
              <label for="login">Login</label>
              <input
                type="text"
                id="login"
                name="login"
                class="fixInput"
              ></input>
              <label for="password">Hasło</label>
              <input
                type="password"
                id="password"
                name="password"
                class="fixInput"
              ></input>
            </form>
          </div>
          <div class="fixButtonRegister">
            <button className="btn btn-warning">Zaloguj</button>
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

export default Login;
