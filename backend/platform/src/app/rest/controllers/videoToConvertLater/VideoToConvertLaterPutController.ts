import { NextFunction, Request, Response } from 'express';
import { RestController } from 'krisemm/context/shared/infrastructure/express/controllers/RestController';
import { VideoToConvertLaterCreator } from 'krisemm/context/videoToConvertLater/application/create/VideoToConvertLaterCreator';
import { VideoToConvertLaterRequest } from 'krisemm/context/videoToConvertLater/application/create/VideoToConvertLaterRequest';

export class VideoToConvertLaterPutController extends RestController {

  private readonly videoToConvertLaterCreator: VideoToConvertLaterCreator;

  constructor(videoToConvertLaterCreator: VideoToConvertLaterCreator) {
    super();
    this.videoToConvertLaterCreator = videoToConvertLaterCreator;
  }

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { idYoutubeVideo, title, description, thumbnail, channel } = req.body;
      const videoToConvertLaterRequest = new VideoToConvertLaterRequest(
        id,
        idYoutubeVideo,
        title,
        description,
        thumbnail,
        channel
        );

      await this.videoToConvertLaterCreator.create(
        videoToConvertLaterRequest.id,
        videoToConvertLaterRequest.idYoutubeVideo,
        videoToConvertLaterRequest.title,
        videoToConvertLaterRequest.description,
        videoToConvertLaterRequest.thumbnail,
        videoToConvertLaterRequest.channel
      )

      res.status(201).send();

    } catch (e) {

      this.handleError(<Error>e, req, next);

    }
  }

  exceptionCodeMapping(): Map<string, number> {
    return new Map<string, number>([]);
  }
}
