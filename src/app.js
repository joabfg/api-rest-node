import express from "express";
import dotenv from "dotenv";
dotenv.config();

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import "./database";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
  }
}

export default new App().app;
