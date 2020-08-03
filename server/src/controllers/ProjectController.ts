import * as monogoose from "mongoose"
import { ProjectSchema } from "../models/Project"
import { Request, Response } from "express";

const Project = monogoose.model('Project', ProjectSchema);

export class ProjectController {
    public addNewProject(req: Request, res: Response) {
        console.log(req.body);
        let newProject = new Project(req.body);

        newProject.save((err, project) => {
            err ? res.send(err) : res.json(project)
        })
    }

    public getProjects(req: Request, res: Response) {
        Project.find({}, (err, project) => {
            if (err) {
                res.send(err);
            }
            res.json(project);
        })
    }

    public async addTasksToProject(req: Request, res: Response) {
        let project = await Project.findOne({"_id": req.body.projectId});

        project.taskList = [...project.taskList, ...req.body.tasks];

        project.save((err, project) => {
            err ? res.send(err) : res.json(project)
        })
    }
}