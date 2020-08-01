import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Routes } from "./router";
import * as mongoose from "mongoose";

class App {
    public app: express.Application;
    public routes: Routes;
    public mongoUrl: string = "mongodb://testuser1:testuser.1@ds016108.mlab.com:16108/collaborate-poc" 
    constructor() {
        this.app = express();
        this.config();
        this.routes = new Routes();
        this.routes.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cors());
        this.mongoSetup();
    }
    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;