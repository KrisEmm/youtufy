import { NextFunction, Request, Response } from 'express';
import { RestController } from 'krisemm/context/shared/infrastructure/express/controllers/RestController';

export class YoutubeVideosGetController extends RestController {

  execute(req: Request, res: Response, next: NextFunction): void {
    try {
      res.end();
    } catch (e) {
      this.handleError(<Error>e, req, next);
    }
  }

  exceptionCodeMapping(): Map<string, number> {
    return new Map<string, number>([]);
  }
}
