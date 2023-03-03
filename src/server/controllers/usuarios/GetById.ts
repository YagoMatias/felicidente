import { Request, Response } from "express";
import { Validation } from "../../shared/middleware";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

interface IParamProps {
  id?: number;
}

export const getByIdValidation = Validation({
  params: yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  }),
});

export const getById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Não implementado!");
};
