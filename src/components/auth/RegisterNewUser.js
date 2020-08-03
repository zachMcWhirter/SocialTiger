import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserManager"

const RegisterNewUser = (props) => {
    const [userCreds, setUserCreds] = useState({
        email: "",
        username: "",
        password: ""
    });

    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = (e) => {
        const stateToChange = { ...userCreds };
        stateToChange[e.target.id] = e.target.value;
        setUserCreds(stateToChange);
    };

    const createNewUser = e => {
        e.preventDefault();
        const userEmail = document.getElementById("email").value
        const userUsername = document.getElementById("username").value

        users.forEach(user => {
            if (user.email === userEmail) {
                alert("The email address you entered matches an existing account");
                    if(user.username === userUsername) {
                        alert("The username you entered matches an existing account");
                    }
            }
                setIsLoading(true);

                // Create the User and redirect user to Login
                UserManager.post(userCreds)
                    .then(() => sessionStorage.setItem(
                        "credentials",
                        JSON.stringify(userCreds)
                    )).then(() => props.history.push("/home"))
        })   
    };      

    const getUsers = () => {
        return UserManager.getAll()
            .then(usersFromAPI => {
                setUsers(usersFromAPI);
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="form-container">
                <form >
                    <fieldset className="registrationFieldset">
                        <div className="registration-h3-container">
                            <h3 className="registration-h3">Registration Form</h3>
                        </div>
                        <div className="formgrid">
                            <label htmlFor="inputEmail">Email: </label>
                            <input onChange={handleFieldChange} type="email"
                                id="email"
                                placeholder="Email"
                                required="" autoFocus=""
                                value={userCreds.email}
                            />
                            <br />
                            <label htmlFor="inputUsername">Username: </label>
                            <input onChange={handleFieldChange} type="username"
                                id="username"
                                placeholder="Username"
                                required="" autoFocus=""
                                value={userCreds.username}
                            />
                            <br />
                            <label htmlFor="inputPassword"
                            >Password: </label>
                            <input onChange={handleFieldChange} type="password"
                                id="password"
                                placeholder="Password"
                                required=""
                                value={userCreds.password}
                                minLength="3"
                            />
                        </div>
                        <button type="submit"
                            className="submitRegistratonButton"
                            disabled={isLoading}
                            onClick={createNewUser}
                        >Sumbit Registration</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
};

export default RegisterNewUser;