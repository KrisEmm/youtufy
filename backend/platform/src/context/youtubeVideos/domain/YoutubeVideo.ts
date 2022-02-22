export class YoutubeVideo {
  private readonly id: string;
  private readonly title: string;
  private readonly description: string;
  private readonly thumbnail: string;
  private readonly channel: string;


  constructor(id: string, title: string, description: string, thumbnail: string, channel: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.channel = channel;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getThumbnail(): string {
    return this.thumbnail;
  }

  getChannel(): string {
    return this.channel;
  }
}
