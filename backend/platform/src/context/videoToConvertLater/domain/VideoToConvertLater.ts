export class VideoToConvertLater {

  readonly id:string;
  readonly idYoutubeVideo:string;
  readonly title:string;
  readonly description:string;
  readonly thumbnail:string;
  readonly channel:string;


  constructor(id: string, idYoutubeVideo: string, title: string, description: string, thumbnail: string, channel: string) {
    this.id = id;
    this.idYoutubeVideo = idYoutubeVideo;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.channel = channel;
  }

  static create(id: string, idYoutubeVideo: string, title: string, description: string, thumbnail: string, channel: string): VideoToConvertLater {
    const videoToConvertLater: VideoToConvertLater = new VideoToConvertLater(
      id,
      idYoutubeVideo,
      title,
      description,
      thumbnail,
      channel
    )
    return videoToConvertLater
  }
}
