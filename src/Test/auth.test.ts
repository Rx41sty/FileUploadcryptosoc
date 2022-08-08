import { nanoid } from 'nanoid';
import request from 'supertest';
import AWS from 'aws-sdk';
// import multer from 'multer';
// import {Request, Response, NextFunction } from 'express';

import app from '../Setup.js';

jest.mock('nanoid');

//jest.mock('aws-sdk');
// let spy = jest.fn();
// jest.mock('multer', () => {
//   const multer = () => ({
//     any: () => {
//       return (req:Request, res:Response, next:NextFunction) => {
//         return next(spy());
//       };
//     },
//   });
//   multer.memoryStorage = () => jest.fn();
//   return multer;
// });
describe('Testing', function(){
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Test file upload', async function() {
    AWS.S3.prototype.upload = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValue({})
    });
    nanoid = jest.fn().mockReturnValue("123");
    let response = await request(app)
  .post('/upload')
   .attach('file', `${__dirname}/kk.jpg`)
  expect(response.status).toEqual(200);
  expect(response.body.data.success).toEqual(true);

//     const buffer = Buffer.from('some data');

// return request(server)
//   .post('/route')
//   .set('Authorization', 'bearer ' + token)
//   .attach('name', buffer, 'custom_file_name.txt');
//   });
  });
});
