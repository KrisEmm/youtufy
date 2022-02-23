export class VideoToConvertLaterRequest {

  readonly _id: string;
  readonly _idYoutubeVideo: string;
  readonly _title: string;
  readonly _description: string;
  readonly _thumbnail: string;
  readonly _channel: string;


  constructor(id: string, idYoutubeVideo: string, title: string, description: string, thumbnail: string, channel: string) {
    this._id = id;
    this._idYoutubeVideo = idYoutubeVideo;
    this._title = title;
    this._description = description;
    this._thumbnail = thumbnail;
    this._channel = channel;
  }

  get id(): string {
    return this._id;
  }

  get idYoutubeVideo(): string {
    return this._idYoutubeVideo;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get thumbnail(): string {
    return this._thumbnail;
  }

  get channel(): string {
    return this._channel;
  }
}
