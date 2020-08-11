import React from "react";


const Welcome = (props) => {

    return (
        <>

            <div className="welcome-container">
                <div className="h2-container">
                    <h2>Welcome {props.user.email}</h2>
                </div>
            </div>
        </>
    )
}

export default Welcome