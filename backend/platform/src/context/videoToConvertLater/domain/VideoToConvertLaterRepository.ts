import { VideoToConvertLater } from 'krisemm/context/videoToConvertLater/domain/VideoToConvertLater';

export interface VideoToConvertLaterRepository {
  save(video:VideoToConvertLater):Promise<void>;
}
