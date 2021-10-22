import Order from '../models/OrderModel.js'

import {jest} from '@jest/globals'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://produce:produce@produce.yiddo.mongodb.net/test?retryWrites=true', 
    { useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    
    })

    describe('Order Model', () => {
        beforeAll(async () => {
            await Order.deleteMany({})
        })
        afterEach(async () => {
            await Order.deleteMany({})
        }
        )
        afterAll(async () => {
            await mongoose.connection.close()
            
        })
        it('has an Order module',()=>{
            expect(Order).toBeDefined()
      })
        describe('Order Model', () => {
            it('Shoud create an order',async ()=>{
                const shippingAddress = {
                    address: 'test',
                    city: 'test',
                    _state: 'test',
                    zipCode: '07508',
                    country: 'test',

                }
                const orderItems = {
                    name: 'test',
                    price: 1,
                    quantity: 1,
                    image: 'https://www.theorganicfoodstore.com/wp-content/uploads/2019/01/apple-1.jpg',
                    product:'61723607421e1600135fa9f8'
                }
                const paymentResults = {
                    id:'test',
                    status:'test',
                    update_time:'test',
                    email_address:'test@gmail.com',

                }
                const order = new Order({
                    user:'616312b5b19745ff2ac3639e',
                    shippingAddress,
                    orderItems,
                    paymentResults,
                    paymentMethod: 'paypal',
                
                })
                await order.save()
                expect(order.shippingAddress).toBeDefined()
                expect(order.orderItems).toBeDefined()
                expect(order.paymentMethod).toBeDefined()

            })
            it('Should not create an order without shipping address',async ()=>{
                const shippingAddress = {
                    address: 'test',
                    city: 'test',
                    _state: 'test',
                    zipCode: '07508',
                    country: 'test',

                }
                const orderItems = {
                    name: 'test',
                    price: 1,
                    quantity: 1,
                    image: 'https://www.theorganicfoodstore.com/wp-content/uploads/2019/01/apple-1.jpg',
                    product:'61723607421e1600135fa9f8'
                }
                const paymentResults = {
                    id:'test',
                    status:'test',
                    update_time:'test',
                    email_address:'test123@gmail.com',
                }
                const order = new Order({
                    user:'616312b5b19745ff2ac3639e',
                    orderItems,
                    paymentResults,
                    paymentMethod: 'paypal',
                })


                expect(order.validate).toThrow()
        })
        })
           

    })
