import { YoutubeVideo } from 'krisemm/context/youtubeVideos/domain/YoutubeVideo';
import { YoutubeSearcher } from 'krisemm/context/youtubeVideos/domain/YoutubeSearcher';
import fetch from 'node-fetch';


export class GoogleApiYoutubeVideosSearcher implements YoutubeSearcher {

  private readonly base_url: string;
  private readonly params: Record<string, string>;

  constructor() {
    this.base_url = 'https://youtube.googleapis.com/youtube/v3/search';
    this.params = {
      part: 'snippet',
      maxResults: '50',
      type: 'video',
      videoDefinition: 'any',
      videoEmbeddable: 'any',
      videoLicense: 'any',
      videoType: 'any',
      q: '',
      key: 'AIzaSyDiUWq1mIk_qBrWlveYLVinlywpEoY_UcQ'
    };
  }

  async search(text: string): Promise<Array<YoutubeVideo>> {
    this.params.q = text;
    const url = new URL(this.base_url);
    url.search  = this.parseUrlSearchParamsFrom(this.params);

    const response = await fetch(url.toString(), {
      method: 'GET'
    });
    const data = await response.json();

    const youtubeVideos:Array<YoutubeVideo> = []

    data.items.forEach((item:Record<string, any>)=>{
      youtubeVideos.push(new YoutubeVideo(
        item.id.videoId,
        item.snippet.title,
        item.snippet.description,
        item.snippet.thumbnails.high.url,
        item.snippet.channelTitle
      ))
    })

    return youtubeVideos;
  }

  parseUrlSearchParamsFrom(params: Record<string, string>): string {
    const urlSearchParams = new URLSearchParams();
    for (const key in params) {
      urlSearchParams.append(key, params[key]);
    }
    return urlSearchParams.toString();
  }
}
