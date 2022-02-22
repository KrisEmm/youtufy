import { expect } from '@jest/globals';
import { YoutubeVideo } from 'krisemm/context/youtubeVideos/domain/YoutubeVideo';
import { YoutubeSearcher } from 'krisemm/context/youtubeVideos/domain/YoutubeSearcher';


export class YoutubeSearcherMock implements YoutubeSearcher {

  private youtubeVideos: Array<YoutubeVideo>;
  private searchMock = jest.fn();

  constructor() {
    this.youtubeVideos = [];
  }

  ValuesThatShouldReturnWhenSearchIsCalled(youtubeVideos: Array<YoutubeVideo>): void {
    this.youtubeVideos = youtubeVideos;
  }

  async search(text: string): Promise<Array<YoutubeVideo>> {
    this.searchMock(text);
    return this.youtubeVideos;
  }

  shouldSearchYoutubeVideos(text: string): void {
    expect(this.searchMock).toHaveBeenCalledWith(text);
  }
}
