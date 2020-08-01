"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router_1 = require("./router");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.mongoUrl = "mongodb://testuser1:testuser.1@ds016108.mlab.com:16108/collaborate-poc";
        this.app = express();
        this.config();
        this.routes = new router_1.Routes();
        this.routes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
