import * as mongoose from "mongoose"

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    taskId: {
        type: String,
        required: "Enter the task id"
    },
    taskName: {
        type: String,
        required: "Enter Task Name"
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
}) 