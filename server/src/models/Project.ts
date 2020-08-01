import * as mongoose from "mongoose"
import { TaskSchema } from "./Task";

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: "Enter the project name"
    },
    taskList: {
        type: [TaskSchema]
    }
});