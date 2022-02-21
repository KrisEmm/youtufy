import { NextFunction, Request, Response } from 'express';

export interface ErrorMiddleware {
  execute(error: Error, req: Request, res: Response, next: NextFunction): void;
}
