import {useEffect} from 'react'



import {useDispatch,useSelector} from 'react-redux'
import {Button, Row,Col,ListGroup,Image,Card,} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Message from '../components/view/Message'
import CheckoutSteps from '../components/view/CheckoutSteps'
import createOrder from '../actions/order/createOrder'
 const addDecimal = (num) => +num.toFixed(2)
 
  

const PlaceOrder = ({history}) => {
  const dispatch = useDispatch()


    const cart = useSelector(state => state.cart)
    const payment = useSelector(state => state.payment)
    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, isFetchingRequestSuccess, error } = orderCreate


     cart.itemsPrice =addDecimal( cart.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0))
    cart.shippingPrice = cart.itemsPrice > 100 ? 5 : 0
    cart.taxPrice =addDecimal(cart.itemsPrice > 100 ? (cart.itemsPrice - 100).toFixed(2) * 0.1 : 0)
    cart.totalPrice = addDecimal(cart.itemsPrice + cart.shippingPrice + cart.taxPrice)
   

    useEffect(() => {
      if (isFetchingRequestSuccess) {
        history.push(`/order/${order._id}`)
        // dispatch({ type: USER_DETAILS_RESET })
        // dispatch({ type: ORDER_CREATE_RESET })
      }
      // eslint-disable-next-line
    }, [history, isFetchingRequestSuccess])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.userShippingAddress,
        paymentMethod: payment.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }
    return (
        <>
          <CheckoutSteps step1 step2 step3 step4/>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">SHIPPING</h2>
                      <span>
                        <strong>Adress:</strong>
                       <ul> {cart.userShippingAddress.address},</ul>
                        <ul>{cart.userShippingAddress.city}, {cart.userShippingAddress._state}{""}{cart.userShippingAddress.zipCode}</ul>
                        <ul>{cart.userShippingAddress.country}</ul>
                        
                      </span>
                  </ol>
                  <ol className="shadow-sm rounded p-3 my-2">
                      <h2 className="fs-2">BILLING</h2>
                      <span>
                        <strong>Adress:</strong>
                        <ul> {cart.userShippingAddress.address},</ul>
                        <ul>{cart.userShippingAddress.city}, {cart.userShippingAddress._state}{""}{cart.userShippingAddress.zipCode}</ul>
                        <ul>{cart.userShippingAddress.country}</ul> 
                      </span>
                  </ol>
                  <ol className="shadow-sm rounded p-3 my-2">
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
          </Row>
            
        </>
    )
}

export default PlaceOrder
