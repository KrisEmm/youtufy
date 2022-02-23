import { VideoToConvertLater } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLater';
import { VideoToConvertLaterRepository } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLaterRepository';
import { expect } from '@jest/globals';

export class VideoToConvertLaterRepositoryMock implements VideoToConvertLaterRepository {

  private mockSave = jest.fn();

  async save(video: VideoToConvertLater): Promise<void> {
    this.mockSave(video);
  }

  shouldSaveAVideoToConvertLaterEqualTo(
    id: string,
    idYoutubeVideo: string,
    title: string,
    description: string,
    thumbnail: string,
    channel: string
  ): void {
    const videoToConvertExpected = new VideoToConvertLater(id, idYoutubeVideo, title, description, thumbnail, channel);
    const mock = this.mockSave.mock;
    const videoToConvertSaved = mock.calls[mock.calls.length - 1][0];
    expect(videoToConvertSaved).toBeInstanceOf(VideoToConvertLater);
    expect(videoToConvertSaved).toEqual(videoToConvertExpected);
  }
}
