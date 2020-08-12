import React from "react";


const Welcome = (props) => {

    return (
        <>

            <div className="welcome-container">
                <div className="h2-container">
                    <h2>Welcome {props.user.email}!</h2>
                    <p className="welcome-instructions">
                        New to Social Tiger? Here's how to get started!
                    </p>    
                            <ul className="instructions">
                                <li>Click the "Folders" button on the NavBar</li> 
                                <li>Click the "Add New Folder" button</li>
                                <li>Give your folder a name and click "Submit"</li>
                                <li>Open your new folder by clicking on it</li>
                                <li>Click the "Add New Image" button</li>
                                <li>Assign your image a folder, a name,  <br></br>
                                    and a description</li>
                                <li>Choose a file to upload and click "Submit"</li> 
                            </ul>


                    
                </div>
            </div>
        </>
    )
}

export default Welcome