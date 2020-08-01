"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema = void 0;
const mongoose = require("mongoose");
const Task_1 = require("./Task");
const Schema = mongoose.Schema;
exports.ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: "Enter the project name"
    },
    taskList: {
        type: [Task_1.TaskSchema]
    }
});
