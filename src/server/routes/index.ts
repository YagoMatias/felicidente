import { Router } from "express";

const __dirname = process.cwd();
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

router.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/login-registro.html`);
});

export { router };
