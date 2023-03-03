import { Router } from "express";
import { UsuariosController } from "../controllers";

const __dirname = process.cwd();
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

/*router.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/pages/login-registro.html`);
});*/

router.get(
  "/login",
  UsuariosController.getAllValidation,
  UsuariosController.getAll
);

router.post(
  "/login",
  UsuariosController.createValidation,
  UsuariosController.create
);

router.get(
  "/login/:id",
  UsuariosController.getByIdValidation,
  UsuariosController.getById
);

router.put(
  "/login/:id",
  UsuariosController.updateByIdValidation,
  UsuariosController.updateById
);

router.delete(
  "/login/:id",
  UsuariosController.deleteByIdValidation,
  UsuariosController.deleteById
);

export { router };
