import { Request, Response } from "express";

const create = (req: Request, res: Response) => {
  res.json(req.body);
};

export { create };
