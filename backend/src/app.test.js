

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
    console.log('Connected to MongoDB')
})
afterEach(async () => {
  console.log('afterEach')
})
afterAll(async () => {
    await mongoose.connection.dropCollection('users')
    await mongoose.connection.close()
    console.log('afterAll')

    
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
        password: '123456',
        isAdmin: true
      })
   
     expect(response.status).toBe(201)
     expect(response.body.token).toBeDefined()
     expect(response.body.name).toBeDefined()
     expect(response.body.email).toBeDefined()

  })
  it('should return 400 BAD REQUEST with no password', async () => {
    const response = await request(app).post('/api/users/register').send({
      name: 'test',
      email: 'test123@gmail.com',

    })
    expect(response.status).toBe(500)

})
})
describe('POST /api/users/login',()=>{
  it('should return 200 OK', async () => {
    const response = await request(app).post('/api/users/login').send({
      email: 'TYAS@gmail.com',
      password: '123456'
    })
    expect(response.status).toBe(200)
    expect(response.body.token).toBeDefined()
    expect(response.body.name).toBeDefined()
    expect(response.body.email).toBeDefined()
  })
  it('should return 400 BAD REQUEST with no password', async () => {
    const response = await request(app).post('/api/users/login').send({
      email: 'TYAS@gmail.com',
    })
    expect(response.status).toBe(400)

})
})
describe('/api/products',()=>{
  it('should return 200 OK', async () => {
    const response = await request(app).get('/api/products')
    expect(response.status).toBe(200)
  })
   it('should get top products',async ()=>{
    const response = await request(app).get('/api/products/top')
    expect(response.status).toBe(200)
  })

  it('should return 404 if the product doesnt exits',async ()=>{
    const response = await request(app).get('/api/products/5f5a5b8c7d8f8c0e7c9c9e1f')
    expect(response.status).toBe(404)
  }
  )
   })

})



