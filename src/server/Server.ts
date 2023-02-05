import express from "express";
import { router } from "./routes";

const __dirname = process.cwd();
const server = express();

server.use(express.static(`${__dirname}/public`));
server.use(router);

export { server };
