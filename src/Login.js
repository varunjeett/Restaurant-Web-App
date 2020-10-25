import React, { useState } from "react";
import "./Login.css";
import pic from "./Media/logo.jpg";
import { Button } from "@material-ui/core";
import {auth} from "./firebase.js";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = (event) => {
    console.log(email);
    console.log(password);

    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
      
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={pic} alt="logo" />

        <h1>Hi Admin , Please Sign In</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        ></input>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        ></input>

        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
