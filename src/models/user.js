let users = []

class User {
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        users.push(this)
    }

    static fetchAll() {
        return users
    }

    static findById(id) {
        return users.find(user => user.id === id)
    }

    static removeById(id) {
        users = users.filter(user => user.id !== id)
    }

    static updateName(id, name) {
        const user = users.find(user => user.id === id)
        if (user) user.name = name
    }
}

module.exports = User
