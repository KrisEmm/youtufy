import express, { Router } from 'express';
import { container } from 'krisemm/app/rest/services';

export const router:Router = express.Router()

const videosToConvertLaterPutController = container.get('App.Rest.Controllers.VideosToConvertLaterPutController')

router.put('/videos/:id', videosToConvertLaterPutController.execute.bind(videosToConvertLaterPutController))
