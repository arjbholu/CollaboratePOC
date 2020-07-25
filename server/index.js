const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

let project1 = {
    "Name": "Project1",
    "TaskList": [
        "TaskItem1",
        "TaskItem2",
        "TaskItem3"
    ]
};

app.get("/getProjectItems", (req, res) => {
    res.send(project1);
});

app.post("/postTask", (req, res) => {
    var tasks = req.body["tasks"];
    console.log(tasks);
    for (let task of tasks) {
        project1["TaskList"].push(task["name"]);
    }
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Server started");
});