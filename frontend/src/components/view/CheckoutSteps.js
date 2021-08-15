import React from 'react'
import { Nav,Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {FcCheckmark} from 'react-icons/fc'
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='breadcrumb justify-content-center mb-4'>
      <Nav.Item> 
        {step1 ? (
      
          
         <Card className="mx-2 shadow-sm bg-body rounded" >
          <LinkContainer  to='/login'>
            <Nav.Link>Sign In </Nav.Link>
          </LinkContainer>
           </Card>
       
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
       
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Card className="mx-2 shadow-sm bg-body rounded">
          <LinkContainer to='/shipping'>
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
           </Card>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Card className="mx-2 shadow-sm bg-body rounded">
          <LinkContainer to='/payment'>
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
           </Card>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Card className="mx-2 shadow-sm bg-body rounded" >
          <LinkContainer to='/placeorder'>
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
           </Card>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps