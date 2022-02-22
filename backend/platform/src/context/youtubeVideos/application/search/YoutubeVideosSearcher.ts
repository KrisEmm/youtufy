import { YoutubeVideo } from 'krisemm/context/youtubeVideos/domain/YoutubeVideo';
import { YoutubeSearcher } from 'krisemm/context/youtubeVideos/domain/YoutubeSearcher';

export class YoutubeVideosSearcher {

  private searcher:YoutubeSearcher;

  constructor(searcher: YoutubeSearcher) {
    this.searcher = searcher
  }

  async search(text: string): Promise<Array<YoutubeVideo>> {
    return await this.searcher.search(text)
  }

}
