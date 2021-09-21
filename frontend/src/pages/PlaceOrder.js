import {useEffect} from 'react'


import Grid from '@material-ui/core/Grid';
import {useDispatch,useSelector} from 'react-redux'
import {Button, Row,Col,ListGroup,Image,Card,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';



import CheckoutSteps from '../components/view/CheckoutSteps'
import createOrder from '../actions/order/createOrder'
import roundDecimalToTwo from '../helpers/roundDecimalToTwo'
import PlaceOrderIn from '../components/view/PlaceOrderIn.js'
import OrderSummary from '../components/view/OrderSummary'


import ORDER_STATUS from '../constants/orderConstants'
import {USER_CONSTANTS} from '../constants/userConstants'

const {ORDER_CREATE_RESET} = ORDER_STATUS
const {USER_DETAILS_RESET } = USER_CONSTANTS

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  
  },
 
})); 

const PlaceOrder = ({history}) => {
  const dispatch = useDispatch()
  const classes = useStyles();

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const user = useSelector(state => state.userLogin)
    const { userInfo } = user


    const payment = useSelector(state => state.payment)
    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, isFetchingRequestSuccess, error } = orderCreate


     cart.itemsPrice =roundDecimalToTwo( cart.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0))
    cart.shippingPrice = cart.itemsPrice > 100 ? 5 : 0
    cart.taxPrice =roundDecimalToTwo(cart.itemsPrice > 100 ? (cart.itemsPrice - 100).toFixed(2) * 0.1 : 0)
    cart.totalPrice = roundDecimalToTwo(cart.itemsPrice + cart.shippingPrice + cart.taxPrice)
   

    useEffect(() => {
      if (isFetchingRequestSuccess) {
        history.push(`/order/${order._id}`)
        dispatch({ type: USER_DETAILS_RESET })
        dispatch({ type: ORDER_CREATE_RESET })
      }
      // eslint-disable-next-line
    }, [history, isFetchingRequestSuccess])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: shippingAddress,
        paymentMethod: payment.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }
    return (
      <div className={classes.root}>
        <Grid  
       container  
  direction="row"
  justifyContent="center"
  alignItems="center"
         >
         <CheckoutSteps step1 step2 step3 step4/>
         <Grid item xs={12} sm={8}>
        <PlaceOrderIn 
        shippingAddress={shippingAddress} 
        title="SHIPPING"
        userInfo={userInfo}
        />
        <PlaceOrderIn 
        shippingAddress={shippingAddress} 
        title="BILLING"
        payment={payment}
        userInfo={userInfo}
        />
        </Grid>
        <Grid item xs={12} sm={4} >
        <OrderSummary 
        cart={cart} 
        placeOrderHandler={placeOrderHandler} 
        error={error}/>
        </Grid>
        </Grid>
          {/* <Row>
            <Col md={8}>
              <ListGroup variant="flush"> */}
                  {/* <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">SHIPPING</h2>
                      <span>
                        <strong>Adress:</strong>
                       <ul> {shippingAddress.address},</ul>
                        <ul>{shippingAddress.city}, {shippingAddress._state}{""}{shippingAddress.zipCode}</ul>
                        <ul>{shippingAddress.country}</ul>
                        
                      </span>
                  </ol>
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">BILLING</h2>
                      <span>
                        <strong>Adress:</strong>
                        <ul> {shippingAddress.address},</ul>
                        <ul>{shippingAddress.city}, {shippingAddress._state}{""}{shippingAddress.zipCode}</ul>
                        <ul>{shippingAddress.country}</ul> 
                      </span>
                  </ol> */}
                  {/* <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">PAYMENT</h2>
                      <span>
                        <strong>Payment Method:</strong>
                        <ul>{payment?.paymentMethod ?? 'PayPal'}</ul>
                      </span>
                  </ol>
                  <ol >
                      <h2 className="fs-2 my-5 text-center">ORDER DETAILS</h2>
                      <span>
                        <strong>Items:</strong>
                        {cart.cartItems.legth === 0 && <Message>Your cart is empty</Message>}
                        <ListGroup variant="flush">
                          {cart.cartItems.map(item =>(
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
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ul>
              <ul>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ul>
              <ul>
                <Row>
                  <Col>Tax</Col>
                  <Col>${+cart.taxPrice}</Col>
                </Row>
              </ul>
              <ul>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ul>
              <ul>
                {error && <Message variant='danger'>{error}</Message>}
              </ul>
              <ul>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ul>
            </ListGroup>
          </Card>
        </Col>
          </Row> */}
            
        </div>
    )
}

export default PlaceOrder
