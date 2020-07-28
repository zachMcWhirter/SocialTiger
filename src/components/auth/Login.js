import React, { useState } from "react"
import Home from "../Home"
import Banner from "../Banner"

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
        // props.history.push("/")
    }

        return (
            <>
                {/* <Banner/>  */}
                {credentials.username === "" || credentials.password === "" ? 
                       
                    <form onSubmit={handleLogin}>
                        <fieldset>
                            <h3>Please sign in</h3>
                            <div className="formgrid">
                                <input onChange={handleFieldChange} type="username"
                                    id="username"
                                    placeholder="Username"
                                    required="" autoFocus="" />
                                <label htmlFor="inputUsername">Username</label>

                                <input onChange={handleFieldChange} type="password"
                                    id="password"
                                    placeholder="Password"
                                    required="" />
                                <label htmlFor="inputPassword">Password</label>
                            </div>
                            <button type="submit">Sign in</button>
                        </fieldset>
                    </form>
                : <Home/> }
            </> 
        )    
    
};

export default Login;
