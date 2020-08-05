import React, { useState } from "react";
import "./Login.css";
import UserManager from "../../modules/UserManager";

const Login = props => {
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    });
     
    const handleFieldChange = e => {
        const stateToChange = { ...userCreds };
        stateToChange[e.target.id] = e.target.value;
        setUserCreds(stateToChange);
    };

    const handleLogin = e => {
        e.preventDefault();

        //if the user doesn't fill out the form
        if (!userCreds.email || !userCreds.password) {
            alert("Please fill out the form");
            return;
        }

        UserManager.getAll()
            .then(allUsers => {
                let foundUser = allUsers.find(userObj => 
                    userObj.email === userCreds.email && userObj.password === userCreds.password);

                // if user enters an email and password that matches an existing account in database - log them into session storage
                if (foundUser) {
                    // log them in
                    sessionStorage.setItem("credentials",
                    JSON.stringify(foundUser));
                    props.history.push("/home");

                    return;
                } else {
                    alert("Email/Password combnation incorrect")
                }
            }
        )
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleLogin}>
                    <fieldset className="loginFieldset">
                        <div className="login-h3-container">
                            <h3 className="login-h3">Please log in</h3>
                        </div>
                        <div className="formgrid">
                            <label htmlFor="inputEmail">Email: </label>
                            <input onChange={handleFieldChange} type="email"
                                id="email"
                                placeholder="Email"
                                required="" autoFocus="" />
                            <br />
                            <label htmlFor="inputPassword"
                            >Password: </label>
                            <input onChange={handleFieldChange} type="password"
                                id="password"
                                placeholder="Password"
                                required=""
                                minLength="3" />
                        </div>
                        <button type="submit">Log In</button>
                    </fieldset>
                </form>

                <div className="registerButton-container">
                    <button className="registerButton"
                        type="button"
                        onClick={() => {
                            props.history.push("/registration")
                        }}
                    >Register New Account
                </button>
                </div>
            </div>
        </>
    )
};

export default Login;