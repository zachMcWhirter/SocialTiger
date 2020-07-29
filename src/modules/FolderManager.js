
const remoteURL = "http://localhost:8088";

export default {
    get(id) {
        return fetch(`${remoteURL}/folders${id}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/folders`)
            .then(result => result.json())
    }
}