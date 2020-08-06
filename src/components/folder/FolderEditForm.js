import React, { useState, useEffect } from "react";
import FolderManager from "../../modules/FolderManager";



const FolderEditForm = (props) => {
    const [folder, setFolder] = useState({
        folderName: "",
        userId: props.userId
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = e => {
        const stateToChange = { ...folder };
        stateToChange[e.target.id] = e.target.value;
        setFolder(stateToChange);
    };

    const updateExistingFolder = e => {
        e.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need to use the id
        const editedFolder = {
            id: props.match.params.folderId,
            folderName: folder.folderName,
            userId: props.userId
        };
          
        // This will parse the "" string value of userId from FolderEditForm and make it an integer
        folder.userId = parseInt(folder.userId)
        
        FolderManager.update(editedFolder)
        .then(() => props.history.push("/folders")) 
    }

    useEffect(() => {
        FolderManager.get(props.match.params.folderId)
          .then(folder => {
            setFolder(folder);
            setIsLoading(false);
          });
      }, [props.match.params.folderId]);

    return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="folderName"
                value={folder.folderName}
              />
              <label htmlFor="name">Folder Name</label>
  
              {/* (chap 13)

              <select
                className="form-control"
                id="employeeId"
                value={animal.employeeId}
                onChange={handleFieldChange}
              > */}
                {/* This is where we map thru the employees array and display them in a selection box (dropdown) */}

                {/* {employees.map(employee =>
                  <option key={employee.id} value={employee.id}>
                    {employee.name}</option>
                )}
              </select>
              <label htmlFor="employeeId">Employee</label> */}
            </div>
            
            <div className="alignRight">
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingFolder}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
};

export default FolderEditForm;