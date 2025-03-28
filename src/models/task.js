let tasks = []

class Task {
    constructor(id, title, status, projectId, userId) {
        this.id = id
        this.title = title
        this.status = status
        this.projectId = projectId
        this.userId = userId
    }

    save() {
        tasks.push(this)
    }

    static fetchAll() {
        return tasks
    }

    static findById(id) {
        return tasks.find(task => task.id === id)
    }

    static removeById(id) {
        tasks = tasks.filter(task => task.id !== id)
    }

    static updateTask(id, title, status) {
        const task = tasks.find(task => task.id === id)
        if (task) {
            task.title = title
            task.status = status
        }
    }
}

module.exports = Task
