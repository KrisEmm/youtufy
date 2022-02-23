import { ApplicationRestApp } from 'krisemm/app/rest/config/ApplicationRestApp';
import request from 'supertest';
import {expect} from '@jest/globals';

describe('VideosToConvertLaterPutController',()=>{

  test('Should add a video to convert later',async ()=>{

    const body = {
      idYoutubeVideo:'',
      title:'',
      description:'',
      thumbnail:'',
      channel:''
    }

    const response = await request(ApplicationRestApp).put('/videos/7525563e-8cc4-402e-b124-412a308736f5').send(body)

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({})

  })

})
