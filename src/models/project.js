let projects = []

class Project {
    constructor(id, name, description) {
        this.id = id
        this.name = name
        this.description = description
    }

    save() {
        projects.push(this)
    }

    static fetchAll() {
        return projects
    }

    static findById(id) {
        return projects.find(project => project.id === id)
    }

    static removeById(id) {
        projects = projects.filter(project => project.id !== id)
    }

    static updateProject(id, name, description) {
        const project = projects.find(project => project.id === id)
        if (project) {
            project.name = name
            project.description = description
        }
    }
}

module.exports = Project
