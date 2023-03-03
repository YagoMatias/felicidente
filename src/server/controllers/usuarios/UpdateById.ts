import { Request, Response } from "express";
import { Validation } from "../../shared/middleware";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

interface IParamProps {
  id?: number;
}

interface IBodyProps {
  email: string;
  cro?: string;
  especialidade?: string;
  senha: string;
  senhaConfirma: string;
}

export const updateByIdValidation = Validation({
  body: yup.object().shape({
    email: yup.string().required().email(),
    cro: yup.string(),
    especialidade: yup.string(),
    senha: yup.string().required(),
    senhaConfirma: yup.string().required(),
  }),
  params: yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  }),
});

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  console.log(req.body);
  console.log(req.params);

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
