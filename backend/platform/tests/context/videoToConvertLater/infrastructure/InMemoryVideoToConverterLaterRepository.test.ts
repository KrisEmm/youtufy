import { container } from 'krisemm/app/rest/services';
import { VideoToConvertLater } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLater';
import { InMemoryVideoToConvertLaterRepository } from 'krisemm/context/videoToConvertLater/infrastructure/InMemoryVideoToConvertLaterRepository';

describe('InmemoryVideoToConvertLaterRepository', () => {

  let repository: InMemoryVideoToConvertLaterRepository;

  beforeEach(()=>{
    repository = container.get('Platform.VideoToConvertLater.VideoToConvertLaterRepository')
  })

  test('Should save a video to convert later', async () => {

    const videoToConvertLater = new VideoToConvertLater(
      "27a5b8c9-f825-419d-b606-66eb4473a21e",
      "ALV-QtDFpSw",
      "Luke Bryan - Play It Again (Official Music Video)",
      "The official music video for Luke Bryan's \"Play It Again\" She was sittin' all alone over on the tailgate Tan legs swingin' by a ...",
      "https://i.ytimg.com/vi/ALV-QtDFpSw/hqdefault.jpg",
      "LukeBryanVEVO"
    );

    await repository.save(videoToConvertLater);

  });
});
