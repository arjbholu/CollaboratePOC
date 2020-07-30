import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Routes } from "./router";

class App {
    public app: express.Application;
    public routes: Routes;
    constructor() {
        this.app = express();
        this.routes = new Routes();
        this.routes.routes(this.app);
        this.config();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(cors());
    }
}

export default new App().app;