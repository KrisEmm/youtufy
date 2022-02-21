import express, { Router } from 'express';
import { container } from 'krisemm/app/rest/services';

export const router:Router = express.Router();
const youtubeVideosGetController = container.get('App.Rest.Controllers.YoutubeVideosGetController');

router.get('youtube/videos',youtubeVideosGetController.execute.bind(youtubeVideosGetController))
