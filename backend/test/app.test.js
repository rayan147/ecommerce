

import request from 'supertest'
import makeApp from './app.js'
import {jest} from '@jest/globals'
import db from '../config/db'

// beforeAll(async () => await db().connectMongo())
// afterEach(async () => await db().clearMongo())
// afterAll(async () => await db().disconnectMongo())

const database=() =>{
const createUser = jest.fn()
const findUserById = jest.fn()  
  return {
    createUser,
    findUserById
  }
}


const app = makeApp(database)


describe('TDD Nodejs API', () => {
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
  },

  )
});

