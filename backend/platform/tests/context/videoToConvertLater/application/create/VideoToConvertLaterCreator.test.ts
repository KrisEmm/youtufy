describe('VideosToConvertLaterCreator', () => {

  let creator: VideoToConvertLaterCreator;
  let repository:VideoToConvertLaterRepositoryMock;

  beforeEach(() => {
    repository = new VideoToConvertLaterRepositoryMock();
    creator = new VideoToConvertLaterCreator(repository);
  });

  test('Should add a video to convert later', () => {
    const videoToConvertLaterRequest = new VideoToConvertLaterRequest(
      '',
      '',
      '',
      '',
      '',
      ''
    );
    repository.VideoToConvertLaterShouldAddWhenCreateIsCalled(videoToConvertLaterRequest);

    creator.create(videoToConvertLaterRequest);

    repository.shouldSaveAVideoToConvertLater();

  });
});
