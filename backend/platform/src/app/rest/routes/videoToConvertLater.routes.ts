import express, { Router } from 'express';
import { container } from 'krisemm/app/rest/services';

export const router:Router = express.Router()

const videoToConvertLaterPutController = container.get('App.Rest.Controllers.VideoToConvertLaterPutController')

router.put('/videos/:id', videoToConvertLaterPutController.execute.bind(videoToConvertLaterPutController))
