import {useEffect} from 'react'



import {useDispatch,useSelector} from 'react-redux'
import {Button, Row,Col,ListGroup,Image,Card,} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Message from '../components/view/Message'
import getOrderDetails from '../actions/order/getOrderDetails'

 
  

const Order = ({match}) => {
const orderId = match.params.id
  const dispatch = useDispatch()
   
  const orderDetails = useSelector(state => state.orderDetails)
 const {isFetchingRequestSuccess,order,error} =orderDetails
    useEffect(() => {
        
         dispatch(getOrderDetails(orderId))
   
      // eslint-disable-next-line
    }, [ dispatch, orderId])

  
    return (
        <>
          <ul>
            {error && <Message variant='danger'>{error}</Message>}
        </ul>
          <h1 className="fs-1"> ORDER {order?._id}</h1>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">SHIPPING</h2>
                      <span>
                        <strong>Adress:</strong>
                       <ul> {order.userShippingAddress.address},</ul>
                        <ul>{order.userShippingAddress.city}, {order.userShippingAddress._state}{""}{order.userShippingAddress.zipCode}</ul>
                        <ul>{order.userShippingAddress.country}</ul>
                        
                      </span>
                  </ol>
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">BILLING</h2>
                      <span>
                        <strong>Adress:</strong>
                        <ul> {order.userShippingAddress.address},</ul>
                        <ul>{order.userShippingAddress.city}, {order.userShippingAddress._state}{""}{order.userShippingAddress.zipCode}</ul>
                        <ul>{order.userShippingAddress.country}</ul> 
                      </span>
                  </ol>
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">PAYMENT</h2>
                      <span>
                        <strong>Payment Method:</strong>
                        <ul>{order?.paymentMethod ?? 'Choose a payment Method'}</ul>
                      </span>
                  </ol>
                  <ol >
                      <h2 className="fs-2 my-5 text-center">ORDER DETAILS</h2>
                      <span>
                        <strong>Items:</strong>
                        {order.orderItems.legth === 0 && <Message>Your order is empty</Message>}
                        <ListGroup variant="flush">
                          {order.orderItems.map(item =>(
                            <ul key={item.product_id} className="shadow-sm rounded p-3 my-2">
                              <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                 </Col>
                                <Col >
                                  <Link to={`/product/${item.product_id}`} style={{ textDecoration:'none'}}>
                                    <h5>{item.name}</h5>
                                  </Link>
                                </Col>
                                <Col md={4}>
                                 {item.price} * {item.quantity} =  {item.price} * {item.quantity}
                                </Col>
                                  
                                 
                               
                              </Row>
                           </ul>
                          ))}
                        </ListGroup>
                      </span>
                  </ol>
              </ListGroup>
            </Col>
            <Col md={4}>
          <Card>
            <ListGroup  >
              <ol>
                <h2>Order Summary</h2>
              </ol>
              <ul>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ul>
              <ul>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ul>
              <ul>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ul>
              <ul>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ul>
            </ListGroup>
          </Card>
        </Col>
          </Row>
            
        </>
    )
}

export default Order