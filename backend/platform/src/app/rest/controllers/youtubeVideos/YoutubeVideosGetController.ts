import { NextFunction, Request, Response } from 'express';
import { RestController } from 'krisemm/context/shared/infrastructure/express/controllers/RestController';
import { YoutubeVideosSearcher } from 'krisemm/context/youtubeVideos/application/search/YoutubeVideosSearcher';

export class YoutubeVideosGetController extends RestController {

  private youtubeVideosSearcher: YoutubeVideosSearcher;

  constructor(youtubeVideosSearcher: YoutubeVideosSearcher) {
    super();
    this.youtubeVideosSearcher = youtubeVideosSearcher;
  }

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const text = <string>req.query.text ?? '';
      const youtubeVideos = await this.youtubeVideosSearcher.search(text);
      res.status(200).json(youtubeVideos)
    } catch (e) {
      this.handleError(<Error>e, req, next);
    }
  }

  exceptionCodeMapping(): Map<string, number> {
    return new Map<string, number>([]);
  }
}
