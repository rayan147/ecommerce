


import request from 'supertest'
import app from './app.js'


describe('Nodejs API', () => {
  describe('/', () => {

    it('should have be up and return 200', async () => {
        const response = await request(app).get('/')
 
      expect(response.statusCode).toBe(200)
      expect(response.text).toBe('Nodejs API is running...')
     
    });

    it('should return 404', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).not.toBe(404)
        expect(response.text).not.toBe('')
    })   
});
   describe('given an email and password', () => {
    
    it('should return a token', async () => {
        const response = await request(app).post('/api/users/login').send({
            email: 'admin@gmail.com',
            password: 'admin123'
        })
        
        expect(response.statusCode).toBe(200)
        expect(response.body.token).toBeTruthy()
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
    })
    })

    describe('when email and passwword are missing', () => {
        it('should return an error', async () => {
            const response = await request(app).post('/api/users/login').send({
                email: '',
                password: ''
            })
          
            expect(response.statusCode).toBe(400)
            expect(response.body.message).toBe('Email and password are required')
          
        })
    })
    
   describe('when registering an user',()=>{
    const genarateRandomEmail = () => {
      return `admin${Math.random()}@gmail.com`
    }
        it('should return a token', async () => {
            const response = await request(app).post('/api/users/register').send(
              {
                // needs to change to a valid email address to work properly
                name: 'admin',
                email: genarateRandomEmail(),
                password: 'admin123'
              })
       
              expect(response.statusCode).toBe(201)
              expect(response.body.token).toBeTruthy()
              expect(response.headers['content-type']).toBe('application/json; charset=utf-8')
              expect(response.body._id).toBeDefined()
            })
  })








   })
   





