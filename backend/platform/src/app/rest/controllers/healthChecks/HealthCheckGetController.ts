import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { RestController } from 'krisemm/context/shared/infrastructure/express/controllers/RestController';

export class HealthCheckGetController extends RestController {

  execute(req: Request, res: Response, next: NextFunction): void {
    try {
      res
        .status(httpStatus.OK)
        .json({
          "app": "youtufy",
          "service":"platform",
          "status":"ok"
        });
    } catch (e) {
      this.handleError(<Error>e, req, next);
    }
  }

  exceptionCodeMapping(): Map<string, number> {
    return new Map<string, number>([]);
  }
}
