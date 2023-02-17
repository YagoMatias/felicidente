import { Request, RequestHandler, Response } from "express";
import { Validation } from "../../shared/middleware";
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

export const createValidation = Validation(validacaoUsuario);

export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  return res.json(req.body);
};
