import { useState} from 'react'



import {useDispatch,useSelector} from 'react-redux'
import {Button, Form,Col} from 'react-bootstrap'


import FormContainer from '../components/view/FormContainer'
import CheckoutSteps from '../components/view/CheckoutSteps'

import savePaymentMethod from '../actions/payment/payment.js'


const Payment = ({history}) => {
  const dispatch = useDispatch()
 
    const userShippingAdress = useSelector(state => state.shippingAdress)
    console.log(userShippingAdress)
    // if(shippingAdress?.shippingAddress === undefined || shippingAdress === null || shippingAdress.length === 0){
    //   history.push('/shipping')
    // }
  
    const [paymentMethod,setPaymentMethod] = useState('Paypal')
 
    
    const submitHandler = (event) => {
        event.preventDefault()
       dispatch(savePaymentMethod(paymentMethod))
       history.push('/placeorder')
    }


    return (
        <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='PayPal or Credit Card'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              {/* <Form.Check
                type='radio'
                label='Stripe'
                id='Stripe'
                name='paymentMethod'
                value='Stripe'
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check> */}
            </Col>
          </Form.Group>
  
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    )
}

export default Payment
