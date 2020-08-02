import React, { useState } from "react"
import "./Login.css"

const Login = props => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
    };

    const handleLogin = e => {
        e.preventDefault();

        sessionStorage.setItem(
            "credentials",
            JSON.stringify(credentials)
        );
        props.history.push("/home")
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleLogin}>
                    <fieldset>
                        <h3>Please log in</h3>
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
                
                <div>
                    <button type="button"
                    // onClick={alert("Display Register new user form")}
                    >Register
                </button>
                </div>
            </div>
        </>
    )
};

export default Login;