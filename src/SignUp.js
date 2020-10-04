import React, { useState } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { auth } from './firebase';
import logo from './Media/logo.jpg'

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
}

export default Login;
