import { Request, Response } from "express"
import { ProjectController } from "./controllers/ProjectController";

export class Routes {
    public projectController: ProjectController = new ProjectController();
    public routes(app): void {
        let project1 = {
            "Name": "Project1",
            "TaskList": [
                "TaskItem1",
                "TaskItem2",
                "TaskItem3"
            ]
        };

        app.route("/project")
        .get(this.projectController.getProjects);

        app.route("/project")
        .post(this.projectController.addNewProject);

        app.route("/getProjectItems").get((req, res) => {
            res.send(project1);
        });

        app.route("/TaskToProject")
        .post(this.projectController.addTasksToProject);

    }
}