import { expect } from '@jest/globals';
import { ApplicationRestApp } from 'krisemm/app/rest/config/ApplicationRestApp';
import request from 'supertest';

describe('YoutubeVideosGetController', () => {

  test('Should return a list of youtube youtubeVideos that match with a text', async () => {

    const text = 'luke+bryan';

    const response = await request(ApplicationRestApp).get(`/youtube/videos?text=${text}`);

    expect(response.status).toEqual(200);

    expect(response.body.length).toBeGreaterThanOrEqual(1);

    response.body.forEach((item: Record<string, string>) => {
      expect(item).toStrictEqual({
        id: expect.any(String),
        title: expect.any(String),
        description: expect.any(String),
        thumbnail: expect.any(String),
        channel: expect.any(String)
      });
    });

  });
});
