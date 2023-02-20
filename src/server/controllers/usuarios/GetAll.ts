import { Request, Response } from "express";
import { Validation } from "../../shared/middleware";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  nome?: string;
  especialidade?: string;
}

export const getAllValidation = Validation({
  query: yup.object().shape({
    nome: yup.string().notRequired(),
    especialidade: yup.string().notRequired(),
  }),
});

export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  console.log(req.query);

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
