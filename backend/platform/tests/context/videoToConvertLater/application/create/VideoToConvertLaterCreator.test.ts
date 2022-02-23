import { VideoToConvertLaterCreator } from 'krisemm/context/videoToConvertLater/application/create/VideoToConvertLaterCreator';
import { VideoToConvertLaterRepositoryMock } from 'krisemm/tests/context/videoToConvertLater/__mock__/VideoToConvertLaterRepositoryMock';

describe('VideoToConvertLaterCreator', () => {

  let creator: VideoToConvertLaterCreator;
  let repository: VideoToConvertLaterRepositoryMock;

  beforeEach(() => {
    repository = new VideoToConvertLaterRepositoryMock();
    creator = new VideoToConvertLaterCreator(repository);
  });

  test('Should add a video to convert later', () => {
    const video = {
      id: '',
      idYoutubeVideo: '',
      title: '',
      description: '',
      thumbnail: '',
      channel: ''
    };

    creator.create(
      video.id,
      video.idYoutubeVideo,
      video.title,
      video.description,
      video.thumbnail,
      video.channel
    );

    repository.shouldSaveAVideoToConvertLaterEqualTo(
      video.id,
      video.idYoutubeVideo,
      video.title,
      video.description,
      video.thumbnail,
      video.channel
    );

  });
});
