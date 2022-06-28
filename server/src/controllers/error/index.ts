/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ message: 'Page Not Found' });
};

interface IError extends Error {
  status?: number;
}

const serverError = (err: IError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: err.status ? err.message : 'Internal Server Error' });
};

class CustomError extends Error {
  status: number;

  message: string;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

export { notFound, serverError, CustomError };
