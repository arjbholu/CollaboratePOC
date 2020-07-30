import { Request, Response } from "express"

export class Routes {
    public routes(app): void {
        let project1 = {
            "Name": "Project1",
            "TaskList": [
                "TaskItem1",
                "TaskItem2",
                "TaskItem3"
            ]
        };

        app.route("/")
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: "Successfully hit!"
            })
        })

        app.route("/getProjectItems").get((req, res) => {
            res.send(project1);
        });

    }
}