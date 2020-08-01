"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const monogoose = require("mongoose");
const Project_1 = require("../models/Project");
const Project = monogoose.model('Project', Project_1.ProjectSchema);
class ProjectController {
    addNewProject(req, res) {
        console.log(req.body);
        let newProject = new Project(req.body);
        newProject.save((err, project) => {
            err ? res.send(err) : res.json(project);
        });
    }
    getProjects(req, res) {
        Project.find({}, (err, project) => {
            if (err) {
                res.send(err);
            }
            res.json(project);
        });
    }
}
exports.ProjectController = ProjectController;
