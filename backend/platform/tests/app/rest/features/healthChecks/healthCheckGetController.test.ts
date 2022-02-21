import { ApplicationRestApp } from 'krisemm/app/rest/config/ApplicationRestApp';
import request from 'supertest';
import { expect } from '@jest/globals';

describe('HealthCheckGetController', () => {
  test('should check if the rest app is working', async () => {
    const response = await request(ApplicationRestApp).get('/health-check');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      "app": "youtufy",
      "service":"platform",
      "status":"ok"
    });
  });
});
