import {useCallback, useEffect,useState,useLayoutEffect} from 'react'


import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { Row,Col,ListGroup,Image,Card,Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
 




import Message from '../components/view/Message'
import getOrderDetails from '../actions/order/getOrderDetails'
import roundDecimalToTwo from '../helpers/roundDecimalToTwo'
import payOrder from '../actions/payment/payOrder'
import deliverOrder from '../actions/order/deliverOrder'
import ORDER_STATUS from '../constants/orderConstants'
const {ORDER_PAYMENT_RESET,ORDER_DELIVER_RESET,ORDER_PAYMENT_SUCCESS} = ORDER_STATUS
const Order = ({match,history}) => {

const [sdkReady, setSdkReady] = useState(false)
const orderId = match.params.id
const dispatch = useDispatch()
   
const orderDetails = useSelector(state => state.orderDetails)
const {isLoading,order,error} =orderDetails


const orderPay = useSelector((state) => state.orderPay)
const { isLoading: loadingPay, isSuccess: successPay } = orderPay

const userLogin = useSelector((state) => state.userLogin)
const { userInfo } = userLogin


const orderDeliver = useSelector((state) => state.orderDeliver)
const { isLoading: loadingDeliver, isSucesss: successDeliver } = orderDeliver


 if (!isLoading) {
  //   Calculate prices
  order.itemsPrice = roundDecimalToTwo (
    order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )
}


useEffect(() => {
  if(!userInfo){
    history.push('/login')
  }
}, [userInfo,history])


useEffect(() => {
  if(!userInfo){
    history.push('/login')
  }
  const addPayPalScript = async () => {
    const { data: clientId } = await axios.get('/api/config/paypal')
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    script.async = true
    script.onload = () => {
      setSdkReady(true)
    }
    document.body.appendChild(script)
  }
  if (!order || successPay || successDeliver || order._id !== orderId) {
    dispatch({ type: ORDER_PAYMENT_SUCCESS })
    dispatch({ type: ORDER_DELIVER_RESET })
    dispatch(getOrderDetails(orderId))
  } else  if (!order?.isPaid) {
    if (!window.paypal) {
      addPayPalScript()
    } else {
      setSdkReady(true)
    }
  }
  
}, [dispatch, orderId, successPay, order,history,userInfo,successDeliver])



useEffect(() => {
  if(!order || successPay||successDeliver  || order._id !== orderId){
    dispatch({ type: ORDER_PAYMENT_RESET })
    dispatch({ type: ORDER_DELIVER_RESET })
    dispatch(getOrderDetails(orderId))
  }

}, [order,successPay,orderId,dispatch,successDeliver])




// Handle paypal payment
const successPaymentHandler = useCallback((paymentResult) => {
  console.log(paymentResult)
  dispatch(payOrder(orderId, paymentResult))
},[orderId,dispatch])

const deliverHandler = useCallback(() => {
  dispatch(deliverOrder(order))
},[dispatch,order])

    return (
        <>
        {isLoading && <Message>Loading order...</Message> }
        {!isLoading && error && <Message variant="danger">{error}</Message>}
        {!isLoading && !error && (
          <>
       
          <h2 className="fs-2"> Order Number {`${order._id}`.toUpperCase()} </h2>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h3 className="fs-3">SHIPPING</h3>
                       
                         <strong>Adress Info:</strong>
                         <>
                        <ul><strong>Name:{order.user.name}</strong></ul>
                        <ul><a href={`mailto:${order.user.email}`}> Email:{order.user.email}</a></ul> 
                        </>
                       <ul> {order.shippingAddress.address},</ul>
                        <ul>{order.shippingAddress.city}, {order.shippingAddress._state}{""}{order.shippingAddress.zipCode}</ul>
                        <ul>{order.shippingAddress.country}</ul>
                        <span className="my-4">
                            
                        <ul><strong>Deliver Status:</strong></ul>
                        {order.isDelivered ? <ul><strong>Deliver Status:</strong> 
                        <Message variant="success"> Delivered on {order.deliveredAt}</Message>
                        </ul> 
                        : <Message variant="warning rounded">Order is not delivered yet</Message>
                        }
                        </span>
  
                  </ol>
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">BILLING</h2>
                     
                      <span>
                        <strong>Billing Info:</strong>
                        <ul><strong>{order.user.name}</strong></ul>
                        <ul> {order.shippingAddress.address},</ul>
                        <ul>{order.shippingAddress.city}, {order.shippingAddress._state}{""}{order.shippingAddress.zipCode}</ul>
                        <ul>{order.shippingAddress.country}</ul> 
                      </span>
                  </ol>
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h3 className="fs-3">PAYMENT</h3>
                     
                        <span className="my-4">
                            <strong>Payment Method:</strong>
                        <ul>{order?.paymentMethod ?? 'Choose a payment Method'}</ul>
                        {order.isPaid ? <ul><strong>Payment Status:</strong> 
                        <Message variant="success"> Paid on {order.paidAt}</Message></ul> 
                          : <Message variant="warning rounded">Order is not paid yet</Message>
                          }
                        </span>
                      
                   
                  </ol>
                  <ol >
                      <h2 className="fs-2 my-5 text-center">ORDER DETAILS</h2>
                      <span>
                        <strong>Items:</strong>
                        {order.orderItems.legth === 0 && <Message>Your order is empty</Message>}
                        <ListGroup variant="flush">
                          {order.orderItems.map(item =>(
                            <ul key={item._id} className="shadow-sm rounded p-3 my-2">
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
              <Container>
                
                  {!order.isPaid && (
                   <>
                  {loadingPay && <Message>Loading...</Message>}
                  {!sdkReady ? (
                    <Message>Loading...</Message>
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                   
                  )}
               </>
              )}
              {loadingDeliver && <h4>Loading...</h4>}
                 {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <>
                    <Button
                      type='button'
                      className='btn w-100 mb-3'
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </>
                )}
        
              </Container>
             
            </ListGroup>
          </Card>
        </Col>
          </Row> 
          </>
        )  
                          }</>
    )
}

export default Order