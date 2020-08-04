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
                if (user.username === userUsername) {
                    alert("The username you entered matches an existing account");
                }
            } else {
                setIsLoading(true);
                   // Create the User and redirect user to Login
            UserManager.post(userCreds)
            .then(() => UserManager.getAll())
            .then((res) => { res.find(user => {
                if (res.username === userUsername) {
                    userCreds.id = res.id
                }
        })
                
            }).then(

                sessionStorage.setItem(
                    "credentials",
                    JSON.stringify(userCreds)
                )).then(() => props.history.push("/home"))

            }
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