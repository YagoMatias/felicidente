import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type TProperty = "body" | "headers" | "params" | "query";

type TAllSchemas = Record<TProperty, ObjectSchema<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

const errosResult: Record<string, Record<string, string>> = {};

export const Validation: TValidation = (schemas) => async (req, res, next) => {
  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], {
        abortEarly: false,
      });
    } catch (err) {
      const yupError = err as ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        if (!error.path) return;
        errors[error.path] = error.message;
      });

      errosResult[key] = errors;
    }
  });

  if (Object.entries(errosResult).length === 0) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errosResult });
  }
};
