

import request from 'supertest'
import makeApp from './app.js'
import {jest} from '@jest/globals'
import db from '../config/db'

import mongoose from 'mongoose'



const database=() =>{
const createUser = jest.fn()
const findUserById = jest.fn()
const findUserByEmail = jest.fn()  
  return {
    createUser,
    findUserById,
    findUserByEmail
  }
}


const app = makeApp(database)


describe('TDD Nodejs API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb+srv://produce:produce@produce.yiddo.mongodb.net/test?retryWrites=true', 
    { useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    
    })
})

afterAll(async () => {
    await mongoose.connection.close()

    
})
  describe('GET /', () => {
    it('should return 200 OK', () => {
      return request(app)
        .get('/')
        .expect(200)
    })
    it('should return  ', async () => {
     const response = await request(app).get('/')
      expect(response.text).toBe('Nodejs API is running...' )
    });
  })
  describe('POST /api/users',()=>{
    it('should return 201 CREATED', async () => {
      const response = await request(app).post('/api/users/register').send({
        name: 'test',
        email: 'TYAS@gmail.com',
        password: '123456'
      })
   
     expect(response.status).toBe(201)
     console.log(response.body)
   


  })
})
});

