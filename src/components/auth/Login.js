import React, { useState } from "react"
import "./Login.css"
import UserManager from "../../modules/UserManager";

const Login = props => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: "" 
    });

    const isAuthenticated = () => sessionStorage.getItem("user") !== null

    const [hasUser, setHasUser] = useState(isAuthenticated())
    const setUser = user => {
        sessionStorage.setItem("user" , JSON.stringify(user))
        setHasUser(isAuthenticated()) 
    }
        
    const handleFieldChange = e => {
        const stateToChange = { ...credentials };
        stateToChange[e.target.id] = e.target.value;
        setCredentials(stateToChange);
    };

    const handleLogin = e => {
        e.preventDefault();
        const userUsername = document.getElementById("username").value
        const userPassword = document.getElementById("password").value

        UserManager.getAll()
            .then(usersFromAPI => {
                usersFromAPI.find(user => {
                    if (user.username === userUsername && user.password === userPassword) {
                            setUser(user)
                            props.history.push("/home")
                        

                    // } else {
                    //     alert("Plaese enter a correct username and password. Or register a new account.")
                    }
                })
            })
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
                            <label htmlFor="inputUsername">Username: </label>
                            <input onChange={handleFieldChange} type="username"
                                id="username"
                                placeholder="Username"
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