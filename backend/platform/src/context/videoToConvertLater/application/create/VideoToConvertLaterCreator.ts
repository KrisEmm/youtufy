import { VideoToConvertLater } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLater';
import { VideoToConvertLaterRepository } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLaterRepository';

export class VideoToConvertLaterCreator {
  private repository:VideoToConvertLaterRepository;

  constructor(repository:VideoToConvertLaterRepository) {
    this.repository = repository
  }

  async create(id: string, idYoutubeVideo: string, title: string, description: string, thumbnail: string, channel: string): Promise<void> {
    const videoToConvertLater = VideoToConvertLater.create(
      id,
      idYoutubeVideo,
      title,
      description,
      thumbnail,
      channel
    )
    await this.repository.save(videoToConvertLater)
  }
}
