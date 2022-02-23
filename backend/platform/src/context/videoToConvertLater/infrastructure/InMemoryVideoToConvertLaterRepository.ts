import { VideoToConvertLater } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLater';
import { VideoToConvertLaterRepository } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLaterRepository';

export class InMemoryVideoToConvertLaterRepository implements VideoToConvertLaterRepository{
  private videosToConvertLater:Map<string,VideoToConvertLater>;

  constructor() {
    this.videosToConvertLater = new Map<string,VideoToConvertLater>([]);
  }

  async save(video: VideoToConvertLater): Promise<void> {
    await this.videosToConvertLater.set(video.id,video)
  }

}
