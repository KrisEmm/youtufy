import express, { Router } from 'express';
import { YoutubeVideosGetController } from 'krisemm/app/rest/controllers/youtubeVideos/YoutubeVideosGetController';
import { container } from 'krisemm/app/rest/services';

export const router: Router = express.Router();
const youtubeVideosGetController: YoutubeVideosGetController = container.get('App.Rest.Controllers.YoutubeVideosGetController');

router.get('/youtube/videos', youtubeVideosGetController.execute.bind(youtubeVideosGetController));
