import React, { useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import logo from "./Media/logo.jpg";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (event) => {
    //prevents refresh
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //user created
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="BunchoLunch_logo" />
        </Link>

        <h1>Sign Up</h1>
        <form>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your E-mail"
            type="email"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your Password"
            type="password"
          />
          <button onClick={register} type="submit" className="signin__button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
