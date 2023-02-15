import express from "express";
import "dotenv/config";
import "./shared/services/TraducoesYup";
import { router } from "./routes";

const __dirname = process.cwd();
const server = express();

server.use(express.static(`${__dirname}/public`));
server.use(express.urlencoded({ extended: true }));

server.use(router);

export { server };
