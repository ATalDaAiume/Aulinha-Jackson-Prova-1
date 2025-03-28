const Task = require('../models/task')

class TaskController {
    static insert(req, res) {
        const { id, title, status, projectId, userId } = req.body
        const task = new Task(id, title, status, projectId, userId)
        task.save()
        res.status(201).json(task)
    }

    static findAll(req, res) {
        const tasks = Task.fetchAll()
        res.json(tasks)
    }

    static update(req, res) {
        const { id, title, status } = req.body
        Task.updateTask(id, title, status)
        res.status(200).json({ message: "Task updated" })
    }

    static remove(req, res) {
        const { id } = req.params
        Task.removeById(Number(id))
        res.status(200).json({ message: "Task deleted" })
    }
}

module.exports = TaskController
