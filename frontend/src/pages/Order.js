import {useCallback, useEffect,useState,useLayoutEffect} from 'react'


import axios from 'axios'

import {useDispatch,useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import { Alert,AlertTitle } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import getOrderDetails from '../actions/order/getOrderDetails'
import roundDecimalToTwo from '../helpers/roundDecimalToTwo'
import payOrder from '../actions/payment/payOrder'
import deliverOrder from '../actions/order/deliverOrder'
import ORDER_STATUS from '../constants/orderConstants'
import OrderItemSummary from '../components/view/OrderItemSummary';

const {ORDER_PAYMENT_RESET,ORDER_DELIVER_RESET,ORDER_PAYMENT_SUCCESS} = ORDER_STATUS


const useStyles = makeStyles({
  root: {
    minWidth: 205,
    marginTop: '20px',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    minHeight: '650px'
    
  },
  title: {
    marginTop:'3rem',
    marginBottom:'3rem',
  },
 
});

const Order = ({match,history}) => {
  const classes = useStyles();
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
  addPayPalScript()
} ,[])

useEffect(() => {

  if (!order || successPay || successDeliver || order._id !== orderId) {
    dispatch({ type: ORDER_PAYMENT_SUCCESS })
    dispatch({ type: ORDER_DELIVER_RESET })
    dispatch(getOrderDetails(orderId))
  }  
}, [dispatch, orderId, successPay, order,userInfo,successDeliver])



useEffect(() => {
  if(!order || successPay||successDeliver  || order._id !== orderId){
    dispatch({ type: ORDER_PAYMENT_RESET })
    dispatch({ type: ORDER_DELIVER_RESET })
    dispatch(getOrderDetails(orderId))
  }

}, [order,successPay,orderId,dispatch,successDeliver])



console.log(order)
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
        <Grid  
       container >
        {isLoading && <Alert>Loading order...</Alert> }
        {!isLoading && error && <Alert severity="error">{error}</Alert>}
        {!isLoading && !error && (
          <>
           <Grid item xs={12} sm={8}>
          <Typography 
          className={classes.title}
          componen="div" variant="h6" > 
         <Alert severity="info"> Order Number <strong>{`${order._id}`.toUpperCase()} </strong></Alert>
          </Typography>
          <List dense  component="nav" aria-label="shipping"> 
          <Typography component="span" variant="h6" color="textPrimary" >
             <strong>   SHIPPING DETAILS </strong>
              </Typography>
          


          <ListItem>
          <ListItemText primary="Name" secondary={order.user.name} />
          </ListItem>
          <ListItem>
          <ListItemText primary="Email" secondary={
            <Link to={`mailto:${order.user.email}`}>
              {order.user.email}
            </Link>

          } />
          </ListItem>
          <ListItem>
          <ListItemText primary="Address" secondary={
            <>
            {order.shippingAddress.address}
            <br />
            {order.shippingAddress.city}, {order.shippingAddress._state} {order.shippingAddress.zipCode}
             , {order.shippingAddress.country}
            </>

          } />
          </ListItem>
          <ListItem>
          <ListItemText primary="Deliver Status" secondary={
            <>  
            {order.isDelivered ?   <Alert severity="success"> Delivered on {order.deliveredAt}</Alert> : <Alert severity="warning">Order is not delivered yet</Alert>}
            <br />
             </>
          } />
          </ListItem>
          
          </List>
          <br/>
          <List dense  component="nav" aria-label="billing details"> 
          <Typography component="span" variant="h6" color="textPrimary" >
             <strong> BILLING DETAILS </strong>
              </Typography>
          


          <ListItem>
          <ListItemText primary="Name" secondary={order.user.name} />
          </ListItem>
          <ListItem>
          <ListItemText primary="Email" secondary={
            <Link to={`mailto:${order.user.email}`}>
              {order.user.email}
            </Link>

          } />
          </ListItem>
          <ListItem>
          <ListItemText primary="Address" secondary={
            <>
            {order.shippingAddress.address}
            <br />
            {order.shippingAddress.city}, {order.shippingAddress._state} {order.shippingAddress.zipCode}
             , {order.shippingAddress.country}
            </>

          } />
          </ListItem>
          <ListItem>
          <ListItemText primary="Payment Method" secondary={order?.paymentMethod ?? 'Choose a payment Method'} /> 
          </ListItem>
          <ListItem>
          <ListItemText primary="Paid Status" secondary={
            <>  
            {order.isPaid ?   <Alert severity="success"> Paid on {order.paidAt}</Alert> : <Alert severity="warning">Order is not paid yet</Alert>}
            <br />
             </>
          } />
          </ListItem>
          
          </List>
          </Grid>
          <br/>
          <Grid item xs={12} sm={4} >
          <Card className={classes.root}>
            <CardContent>
        <Typography  gutterBottom>
         <strong>   Order Summary </strong>
          </Typography> 
          {order.orderItems === 0 && (
               <Alert severity="info">
               <AlertTitle>Info</AlertTitle>
                Your cart is empty
             </Alert>
          )}
        
        <List  dense>
             {order.orderItems.map(item => (
                 <>
                 <ListItem key={item.product_id}>
                <OrderItemSummary key={item.product_id} item={item} />
                </ListItem>
                </>
          ))} 
         </List>
            <List dense  >
                <ListItem >  
                    <ListItemText primary="Subtotal"  />
                     ${order.itemsPrice}
                    
                </ListItem> 
                <ListItem >
                    <ListItemText primary="Tax"/>
                     ${order.taxPrice}
                </ListItem>
                <ListItem>
                    <ListItemText primary="Shipping" />
                     ${order.shippingPrice}
                </ListItem>
                <ListItem>
                    
                    <ListItemText primary="Total" />
                    <strong>
                     ${order.totalPrice}
                    </strong>
                </ListItem>
            </List>
            {error && (
               <Alert severity="error">
               <AlertTitle>Error</AlertTitle>
                {error}
             </Alert>
          )}
            {/* <Button 
        disabled={cartItems === 0}
        variant="contained" 
        color="primary"
        onClick={placeOrderHandler}
        >
            Place Order
            </Button> */}
          </CardContent> 
          {!order.isPaid && (
                   <>
                  {loadingPay && <Alert severity="info">Loading...</Alert>}
                  {!sdkReady ? (
                    <Alert severity="info">Loading...</Alert>
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
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </>
                )}
        </Card>
        </Grid>
         
          {/* <Row>
            <Col md={8}>
              <ListGroup variant="flush"> */}
                  {/* <ol className="shadow-sm rounded p-3 my-2">
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
                        <Alert severity="success"> Delivered on {order.deliveredAt}</Alert>
                        </ul> 
                        : <Alert severity="warning">Order is not delivered yet</Alert>
                        }
                        </span>
  
                  </ol> */}
                  {/* <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">BILLING</h2>
                     
                      <span>
                        <strong>Billing Info:</strong>
                        <ul><strong>{order.user.name}</strong></ul>
                        <ul> {order.shippingAddress.address},</ul>
                        <ul>{order.shippingAddress.city}, {order.shippingAddress._state}{""}{order.shippingAddress.zipCode}</ul>
                        <ul>{order.shippingAddress.country}</ul> 
                      </span>
                  </ol> */}
                  {/* <ol className="shadow-sm rounded p-3 my-2">
                      <h3 className="fs-3">PAYMENT</h3>
                     
                        <span className="my-4">
                            <strong>Payment Method:</strong>
                        <ul>{order?.paymentMethod ?? 'Choose a payment Method'}</ul>
                        {order.isPaid ? <ul><strong>Payment Status:</strong> 
                        <Alert severity="success"> Paid on {order.paidAt}</Alert></ul> 
                          : <Alert severity="warning">Order is not paid yet</Alert>
                          }
                        </span>
                      
                   
                  </ol> */}
                  {/* <ol >
                      <h2 className="fs-2 my-5 text-center">ORDER DETAILS</h2>
                      <span>
                        <strong>Items:</strong>
                        {order.orderItems.legth === 0 && <Alert>Your order is empty</Alert>}
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
                  {loadingPay && <Alert severity="info">Loading...</Alert>}
                  {!sdkReady ? (
                    <Alert severity="info">Loading...</Alert>
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
          </Row>  */}
          </>
        )  
                          }
                          </Grid>
                          </>
    )
}

export default Order