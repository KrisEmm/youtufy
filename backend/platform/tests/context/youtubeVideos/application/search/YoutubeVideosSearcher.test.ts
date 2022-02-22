import { YoutubeVideosSearcher } from 'krisemm/context/youtubeVideos/application/search/YoutubeVideosSearcher';
import { YoutubeVideo } from 'krisemm/context/youtubeVideos/domain/YoutubeVideo';
import { YoutubeSearcherMock } from 'krisemm/tests/context/youtubeVideos/__mocks__/YoutubeSearcherMock';
import { expect } from '@jest/globals';

describe('YoutubeVideosSearcher', () => {

  let searcher: YoutubeSearcherMock;

  beforeEach(() => {
    searcher = new YoutubeSearcherMock();
  });

  test('Should return a list of youtube youtubeVideos that match with a text', async () => {

    const text = 'country-music';

    const listYoutubeVideosExpected: Array<YoutubeVideo> = [
      new YoutubeVideo(
        '',
        '',
        '',
        '',
        ''
      )
    ];

    searcher.ValuesThatShouldReturnWhenSearchIsCalled(listYoutubeVideosExpected);

    const youtubeVideosSearcher = new YoutubeVideosSearcher(searcher);

    const listYoutubeVideosActual = await youtubeVideosSearcher.search(text);

    searcher.shouldSearchYoutubeVideos(text);

    expect(listYoutubeVideosActual.length).toBeGreaterThanOrEqual(1);

    listYoutubeVideosActual.forEach(video => {
      expect(video).toBeInstanceOf(YoutubeVideo);
    });

  });

  test('Should return a empty list of youtube youtubeVideos that do not match with a text', async () => {

    const text = 'jdshafda';

    const listYoutubeVideosExpected:Array<YoutubeVideo> = [];

    searcher.ValuesThatShouldReturnWhenSearchIsCalled(listYoutubeVideosExpected);

    const youtubeVideosSearcher = new YoutubeVideosSearcher(searcher);

    const listYoutubeVideosActual = await youtubeVideosSearcher.search(text);

    searcher.shouldSearchYoutubeVideos(text);

    expect(listYoutubeVideosActual.length).toEqual(0);

  });
});
