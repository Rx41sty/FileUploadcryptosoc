import request from 'supertest';
import multer from 'multer';
import {Request, Response, NextFunction } from 'express';
import AWS from 'aws-sdk';



jest.mock('aws-sdk');
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

  it('Test', async function() {
    AWS.S3.prototype.upload = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValue({})
    });

//     const buffer = Buffer.from('some data');

// return request(server)
//   .post('/route')
//   .set('Authorization', 'bearer ' + token)
//   .attach('name', buffer, 'custom_file_name.txt');
//   });
});
