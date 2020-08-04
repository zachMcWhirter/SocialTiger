// take 1

// const RegisterNewUser = (props) => {
//     const [userCreds, setUserCreds] = useState({
//         email: "",
//         username: "",
//         password: ""
//     });

//     const [users, setUsers] = useState([]);

//     const [isLoading, setIsLoading] = useState(false);

//     const handleFieldChange = (e) => {
//         const stateToChange = { ...userCreds };
//         stateToChange[e.target.id] = e.target.value;
//         setUserCreds(stateToChange);
//     };

//     const createNewUser = e => {
//         e.preventDefault();
//         const userEmail = document.getElementById("email").value
//         const userUsername = document.getElementById("username").value

//         users.forEach(user => {
//             if (user.email === userEmail) {
//                 alert("The email address you entered matches an existing account");
//                 if (user.username === userUsername) {
//                     alert("The username you entered matches an existing account");
//                 }
//             } else {
//                 setIsLoading(true);
//                    // Create the User and redirect user to Login
//             UserManager.post(userCreds)
//             .then(() => UserManager.getAll())
//             .then((res) => { res.find(user => {
//                 if (res.username === userUsername) {
//                     userCreds.id = res.id
//                 }
//         })
                
//             }).then(

//                 sessionStorage.setItem(
//                     "credentials",
//                     JSON.stringify(userCreds)
//                 )).then(() => props.history.push("/home"))

//             }
//         })
         
//     };

//     const getUsers = () => {
//         return UserManager.getAll()
//             .then(usersFromAPI => {
//                 setUsers(usersFromAPI);
//             });
//     }

//     useEffect(() => {
//         getUsers();
//     }, []);



// take 2

// import React, { useState } from "react"
// import "./Login.css"
// import UserManager from "../../modules/UserManager";

// const Login = props => {

//     const [credentials, setCredentials] = useState({
//         username: "",
//         password: "" 
//     });

//     const isAuthenticated = () => sessionStorage.getItem("user") !== null

//     const [hasUser, setHasUser] = useState(isAuthenticated())
//     const setUser = user => {
//         sessionStorage.setItem("user" , JSON.stringify(user))
//         setHasUser(isAuthenticated()) 
//     }
        
//     const handleFieldChange = e => {
//         const stateToChange = { ...credentials };
//         stateToChange[e.target.id] = e.target.value;
//         setCredentials(stateToChange);
//     };

//     const handleLogin = e => {
//         e.preventDefault();
//         const userUsername = document.getElementById("username").value
//         const userPassword = document.getElementById("password").value

//         UserManager.getAll()
//             .then(usersFromAPI => {
//                 var foundUser = usersFromAPI.find(user => {
//                     if (user.username === userUsername && user.password === userPassword) {
//                         return true;
//                         } else {
//                             return false:
//                         }
//                 });
//             })
//     };

//     return (
//         <>
//             <div className="form-container">
//                 <form onSubmit={handleLogin}>
//                     <fieldset className="loginFieldset">
//                         <div className="login-h3-container">
//                             <h3 className="login-h3">Please log in</h3>
//                         </div>
//                         <div className="formgrid">
//                             <label htmlFor="inputUsername">Username: </label>
//                             <input onChange={handleFieldChange} type="username"
//                                 id="username"
//                                 placeholder="Username"
//                                 required="" autoFocus="" />
//                             <br />
//                             <label htmlFor="inputPassword"
//                             >Password: </label>
//                             <input onChange={handleFieldChange} type="password"
//                                 id="password"
//                                 placeholder="Password"
//                                 required=""
//                                 minLength="3" />
//                         </div>
//                         <button type="submit">Log In</button>
//                     </fieldset>
//                 </form>

//                 <div className="registerButton-container">
//                     <button className="registerButton"
//                         type="button"
//                         onClick={() => {
//                             props.history.push("/registration")
//                         }}
//                     >Register New Account
//                 </button>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default Login;