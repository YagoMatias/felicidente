import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IUsuario {
  nome: string;
  email: string;
  cpf: string;
  cro?: string;
  especialidade?: string;
  senha: string;
  senhaConfirma: string;
}

const validacaoUsuario: yup.ObjectSchema<IUsuario> = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().required().email(),
  cpf: yup.string().required(),
  cro: yup.string(),
  especialidade: yup.string(),
  senha: yup.string().required(),
  senhaConfirma: yup.string().required(),
});

export const createValidacaUsuario: RequestHandler = async (req, res, next) => {
  try {
    await validacaoUsuario.validate(req.body, {
      abortEarly: false,
    });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;
      errors[error.path] = error.message;
    });
    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};

const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  return res.json(req.body);
};

export { create };
