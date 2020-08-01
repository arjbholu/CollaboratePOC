import * as monogoose from "mongoose"
import { ProjectSchema } from "../models/Project"
import { Request, Response } from "express";

const Project = monogoose.model('Project', ProjectSchema);

export class ProjectController {
    public addNewProject(req: Request, res: Response) {
        let newProject = new Project(req.body);

        newProject.save((err, project) => {
            err ? res.send(err) : res.json(project)
        })
    }
}