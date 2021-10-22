

import User from '../models/userModel.js'
import {jest} from '@jest/globals'
import mongoose from 'mongoose'

// create a new database connection before running any tests
// so that we don't interfere with other tests
// it is separate from the connection used by the app
mongoose.connect('mongodb+srv://produce:produce@produce.yiddo.mongodb.net/test?retryWrites=true', 
    {useNewUrlParser: true, 
    useUnifiedTopology: true
    })


describe('User model test', () => {
    beforeAll(async () => {
     
        await User.deleteMany({})
    })
    afterEach(async () => {
        await User.deleteMany({})
    }
    )
    afterAll(async () => {
        await mongoose.connection.close()
        
    })
   it('has an User module',()=>{
         expect(User).toBeDefined()
   })
    it('can create a new user', async () => {
        const user = new User({
            email: 'test123@gmail.com',
            password: '123456',
            name: 'test',
            isAdmin: true
        })
        await user.save()
        expect(user.isAdmin).toBe(true)
        
    })
    it('it should encrypt the password',async ()=>{
        const user = new User({
            email: 'test123@gmail.com',
            password: '123456',
            name: 'test',
            isAdmin: true
        })

        await user.save()
        expect(user.password).not.toBe('123456')
    })
    describe('Should be able not create a new user', () => {
        it('with no email', async () => {
            const user = new User({
                password: '123456',
                name: 'test',
                isAdmin: true
            })
            await expect(user.save()).rejects.toThrow()
        })
        it('with no password', async () => {
            const user = new User({
                email: 'test123@gmail.com',
                name: 'test',
                isAdmin: true
            })
            await expect(user.save()).rejects.toThrow()
        })
        it('with no name', async () => {
            const user = new User({
                email: 'test123@gmail.com',
                password: '123456',
                isAdmin: true})
            await expect(user.save()).rejects.toThrow()

        })
         
            
    
    })
});