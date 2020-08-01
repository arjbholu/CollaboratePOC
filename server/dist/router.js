"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const ProjectController_1 = require("./controllers/ProjectController");
class Routes {
    constructor() {
        this.projectController = new ProjectController_1.ProjectController();
    }
    routes(app) {
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
    }
}
exports.Routes = Routes;
