import express from "express";

const __dirname = process.cwd();

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/login-registro.html`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
