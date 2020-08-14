import React from "react";


const Welcome = (props) => {

    return (
        <>
            <div className="under-nav-over-randomizer">
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
                    <div className="social-tiger-definition">
                        TOP DEFINITION
                        <h4 id="ST-definition-h4">Social Tiger</h4>
                        <p id="ST-definition-body">That seemimgly quiet fellow who <br/>"crouches in the brush" of a conversation,<br/>
                        standing in the background of the crowd,<br/> waiting patiently for the perfect moment 
                        to<br/> say something hilarious.<br/><br/>

                        synonym: Opportunistic Comedian<br/>
                        </p>
                        <h6 id="urban-dictionary">urban dictionary</h6>
                        {/* <img id="ST-definition" src="https://res.cloudinary.com/lordargyle22/image/upload/v1597160968/socialTiger/Screen_Shot_2020-07-23_at_6.52.47_PM_qmkgy4.png" /> */}

                    </div>
                </div>
            </div>    
        </>
    )
}

export default Welcome