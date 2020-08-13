
const remoteURL = "http://localhost:8088";

export default {
    get(id) {
        return fetch(`${remoteURL}/images/${id}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/images`)
            .then(result => result.json())
    },
    //gets images by thier folderId
    getByFolderId(folderId) {
        return fetch(`${remoteURL}/images?folderId=${folderId}`)
            .then(result => result.json())
    },
    getRandomImageId() {
        return fetch(`${remoteURL}/images`)
            .then(result => result.json())
            .then(images => {
                const randomIndex = Math.floor(Math.random() * images.length);
                const randomImage = images[randomIndex];
                return randomImage.id;
            });
    },
    getRandomImageForUser(userId) {
        return fetch(`${remoteURL}/folders?userId=${userId}`)
            .then(result => result.json())
            .then(folders => {
                let folderIdStrings = folders.map(folder => `folderId=${folder.id}`);
                let queryString = folderIdStrings.join('&');
                return fetch(`${remoteURL}/images?${queryString}`);
            })
            .then(result => result.json())
            .then(images => images[Math.floor(Math.random() * images.length)])
    },
    delete(id) {
        return fetch(`${remoteURL}/images/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newImage) {
        return fetch(`${remoteURL}/images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newImage)
        }).then(data => data.json())
    },
    update(editedImage) {
        return fetch(`${remoteURL}/images/${editedImage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedImage)
        }).then(data => data.json());
    }

}