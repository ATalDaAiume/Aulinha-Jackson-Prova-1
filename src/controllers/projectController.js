const Project = require('../models/project')

class ProjectController {
    static insert(req, res) {
        const { id, name, description } = req.body
        const project = new Project(id, name, description)
        project.save()
        res.status(201).json(project)
    }

    static findAll(req, res) {
        const projects = Project.fetchAll()
        res.json(projects)
    }

    static update(req, res) {
        const { id, name, description } = req.body
        Project.updateProject(id, name, description)
        res.status(200).json({ message: "Project updated" })
    }

    static remove(req, res) {
        const { id } = req.params
        Project.removeById(Number(id))
        res.status(200).json({ message: "Project deleted" })
    }
}

module.exports = ProjectController
