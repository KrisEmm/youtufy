import { NextFunction, Request, Response } from 'express';
import { RestController } from 'krisemm/context/shared/infrastructure/express/controllers/RestController';

export class VideoToConvertLaterPutController extends RestController {

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await res.status(201).send()
    } catch (e) {
      this.handleError(<Error>e, req, next);
    }
  }

  exceptionCodeMapping(): Map<string, number> {
    return new Map<string, number>([]);
  }
}
