import React, {useState} from "react";

const RegisterNewUser = (props) => {
    const [registrationForm, setRegistrationForm] = useState({
        email: "", 
        username: "", 
        password: ""
    });

    const handleFieldChange = (e) => {
        const stateToChange = { ...registrationForm };
        stateToChange[e.target.id] = e.target.value;
        setRegistrationForm(stateToChange);
    };
    
    const handleRegistration = e => {
        e.preventDefault();

        // sessionStorage.setItem(
        //     "credentials",
        //     JSON.stringify(credentials)
        // );
        props.history.push("/")
    }

    return (
        <>
               <div className="form-container">
                <form onSubmit={handleRegistration}>
                    <fieldset className="registrationFieldset">
                        <div className="registration-h3-container">
                            <h3 className="registration-h3">Registration Form</h3>
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
                        <button type="submit">Register</button>
                    </fieldset>
                </form>
                
                <div className="registerButton-container">
                    <button className="registerButton"
                            type="button"
                    >Register New Account
                </button>
                </div>
            </div>
        </>
    )
}

export default RegisterNewUser;