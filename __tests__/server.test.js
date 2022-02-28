'use strict'

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing API server',() => {
   
    it('testing /', async() => {
        const response = await request.get('/');
      
        expect(response.text).toEqual('home route');
       
    })


it(' get status 404 for bad route',async()=>{
  const res1 =await request.get('/mus');
  const res2 =await request.get('/fod');
  expect(res1.status).toBe(404);
  expect(res2.status).toBe(404);

});

it(' get status 404 for bad method ',async()=>{
  const res1 =await request.post('/music/1');
  const res2 =await request.post('/food/1');
  expect(res1.status).toBe(404);
  expect(res2.status).toBe(404);
});

})


