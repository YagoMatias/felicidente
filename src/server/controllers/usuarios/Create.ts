import { Request, Response } from "express";
import { Validation } from "../../shared/middleware";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

interface IUsuario {
  nome: string;
  email: string;
  cpf: string;
  cro?: string;
  especialidade?: string;
  senha: string;
  senhaConfirma: string;
}

export const createValidation = Validation({
  body: yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    cpf: yup.string().required(),
    cro: yup.string(),
    especialidade: yup.string(),
    senha: yup.string().required(),
    senhaConfirma: yup.string().required(),
  }),
});

export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  console.log(req.body);

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
