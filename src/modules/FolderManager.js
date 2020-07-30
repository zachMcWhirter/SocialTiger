
const remoteURL = "http://localhost:8088";

export default {
    get(id) {
        return fetch(`${remoteURL}/folders${id}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/folders`)
            .then(result => result.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/folders/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newFolder) {
        return fetch(`${remoteURL}/folders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFolder)
        }).then(data => data.json())
    }
}
