import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserManager"

    //Function to assign unique ID to new users
    function nextAvailableID(allUsers) {
        //begin with an ID
        var highestID = 0;

        // loop through the list of users and make sure
        //  you always have the highest ID strored
        //  in highestID
        for (let user of allUsers) {
            if (user.id > highestID) {
                highestID =user.id;
            }
        }
        return highestID + 1;
    }

const RegisterNewUser = (props) => {
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = e => {
        const stateToChange = { ...userCreds };
        stateToChange[e.target.id] = e.target.value;
        setUserCreds(stateToChange);
    };

    const createNewUser = e => {
        e.preventDefault();
        // const userEmail = userCreds.email;
        if (!userCreds.email || !userCreds.password) {
            alert("Please fill out the form");
            return;
        } 
        
        UserManager.getAll()
            .then(allUsers => {
                let foundUser = allUsers.find(userObj => userObj.email === userCreds.Email);
                if (foundUser) {
                    alert("User already exists")
                    return;
                }
                // All conditions for creating a new 
                // user have been met. 
                // Now we tell it how to make one.
                let newUser = {
                    email: userCreds.email,
                    password: userCreds.password,
                    id: nextAvailableID(allUsers)
                };
                UserManager.post(newUser)
                    .then(() => {
                        sessionStorage.setItem("credentials", JSON.stringify(newUser));
                        props.history.push("/home");
                    });
            });


    }

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