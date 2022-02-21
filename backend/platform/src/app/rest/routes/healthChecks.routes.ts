import express, { Router } from 'express';
import { HealthCheckGetController } from 'krisemm/app/rest/controllers/healthChecks/HealthCheckGetController';
import { container } from 'krisemm/app/rest/services';

export const router: Router = express.Router();
const healthCheckGetController: HealthCheckGetController = container.get('App.Rest.Controllers.HealthCheckGetController');
router.get('/health-check', healthCheckGetController.execute.bind(healthCheckGetController));
