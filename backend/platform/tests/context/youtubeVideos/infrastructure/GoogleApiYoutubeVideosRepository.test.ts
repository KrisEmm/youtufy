import { expect } from '@jest/globals';
import { container } from 'krisemm/app/rest/services';
import { YoutubeVideo } from 'krisemm/context/youtubeVideos/domain/YoutubeVideo';
import { YoutubeSearcher } from 'krisemm/context/youtubeVideos/domain/YoutubeSearcher';

let searcher: YoutubeSearcher;

beforeEach(() => {
  searcher = container.get('Platform.YoutubeVideos.YoutubeSearcher');
});

describe('GoogleApiYoutubeVideosRepository', ()=>{

  test('Should return a list of youtube youtubeVideos that match with a text',async()=>{

    const text = 'luke bryan';

    const listYoutubeVideosActual = await searcher.search(text);

    expect(listYoutubeVideosActual.length).toBeGreaterThanOrEqual(1);

    listYoutubeVideosActual.forEach(video => {
      expect(video).toBeInstanceOf(YoutubeVideo);
    });

  })
})
