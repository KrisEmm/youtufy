import { YoutubeVideo } from 'krisemm/context/youtubeVideos/domain/YoutubeVideo';

export interface YoutubeSearcher {
  search(text: string): Promise<Array<YoutubeVideo>>;
}
