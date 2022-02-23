import express, { Router } from 'express';
import { VideoToConvertLaterPutController } from 'krisemm/app/rest/controllers/videoToConvertLater/VideoToConvertLaterPutController';
import { container } from 'krisemm/app/rest/services';

export const router:Router = express.Router()

const videoToConvertLaterPutController:VideoToConvertLaterPutController = container.get('App.Rest.Controllers.VideoToConvertLaterPutController')

router.put('/videos/:id', videoToConvertLaterPutController.execute.bind(videoToConvertLaterPutController))
