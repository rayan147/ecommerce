import Product from '../models/productModel.js'
import {jest} from '@jest/globals'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://produce:produce@produce.yiddo.mongodb.net/test?retryWrites=true', 
    { useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    
    })
    describe('Product model test', () => {
        beforeAll(async () => {
         
            await Product.deleteMany({})
        })
        afterEach(async () => {
            await Product.deleteMany({})
        }
        )
        afterAll(async () => {
            await mongoose.connection.close()
            
        })
       it('has a Product module',()=>{
             expect(Product).toBeDefined()
       })
        
        describe('Should be able to create products',()=>{
            it('should create a product', async () => {
                
                const product = new Product({
                    name: 'Apple',
                    price: 15000,
                    numReviews: 0,
                    rating: 0,
                    numOfReviews: 0,
                    brand: 'Apple',
                    image: 'https://www.theorganicfoodstore.com/wp-content/uploads/2019/01/apple-1.jpg',
                    countInStock: 10,
                    category: 'Fruit',
                    description: 'A delicious apple',
                    user: '616312b5b19745ff2ac3639e'
                })
                const savedProduct = await product.save()
                expect(savedProduct).toHaveProperty('_id')
                expect(savedProduct.name).toBe('Apple')
                expect(savedProduct.price).toBe(15000)
                expect(savedProduct.numReviews).toBe(0)
                expect(savedProduct.countInStock).toBe(10)
                expect(savedProduct.category).toBe('Fruit')
                expect(savedProduct.image).toBe('https://www.theorganicfoodstore.com/wp-content/uploads/2019/01/apple-1.jpg')
                expect(savedProduct.description).toBe('A delicious apple')
            })
            it('should not create a product with invalid data', async () => {
                const product = new Product({
                    name: 'Apple',
                    brand: 'Apple',
                    image: 'https://www.theorganicfoodstore.com/wp-content/uploads/2019/01/apple-1.jpg',
                    category: 'Fruit',
                    description: 'A delicious apple',
                  
                })
                expect(product.validate).toThrow()
            })
            
        })     
 })