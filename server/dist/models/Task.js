"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.TaskSchema = new Schema({
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
});
