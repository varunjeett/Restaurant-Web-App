import React, { useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
import { Button } from "@material-ui/core";
import { auth } from './firebase';
import logo from './Media/logo.png'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (event) => {
        //prevents refresh
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //user created
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }

    return (
        <div className="signin">
            <div className="signin__container">

                <Link to="/">
                    <img className="signin__logo"
                        src={logo}
                        alt="BunchoLunch_logo"
                    />
                </Link>


                <h1>Add New Admin, Sign Up</h1>

                <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter your E-mail" type="email" />
                <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter your Password" type="password" />
                <Button onClick={register}>Sign Up</Button>

            </div>

        </div>
    );
=======
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
>>>>>>> 0f7a05450fdd4ab7515507e47be74a54bd2249a9
}

export default Login;
