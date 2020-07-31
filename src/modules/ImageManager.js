
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