import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserManager"

const RegisterNewUser = (props) => {
    const [userCreds, setUserCreds] = useState({
        email: "",
        username: "",
        password: "",
        id: 0
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
        let getUserEmail = users.find(userObj => {
            return userObj.email === userEmail;
        })
        let getUsername = users.find(userObj => {
            return userObj.username === userUsername;
        })
        if (getUserEmail && getUsername) {
            alert("User email and username already exists")
        } else if (getUserEmail) {
            alert("Email address already in use")
        } else if (getUsername) {
            alert(" Username already in use")
        } else if (userCreds.email === "" || userCreds.username === "" || userCreds.password === "") {
            alert("Complete all form fields")
        } else {
            setIsLoading(true)
            console.log(userCreds)
            UserManager.post(userCreds)
                .then(() => {
                    UserManager.getAll()
                        .then(res => {
                            res.find(user => {
                                if (user.username === userUsername) {
                                    userCreds.id = user.id
                                    props.history.push("/")
                                }
                            })

                            sessionStorage.setItem(
                                "credentials",
                                JSON.stringify(userCreds)
                            );
                            props.history.push("/home")
                        })
                })
        }
    }

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