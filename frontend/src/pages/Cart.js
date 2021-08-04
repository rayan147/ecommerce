import React,{useEffect,lazy} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Button,Form} from 'react-bootstrap'
import {BiTrash} from 'react-icons/bi'
import addToCart from "../actions/cart/addToCart"
import removeFromCart from "../actions/cart/removeFromCart"


// ONLY LOADS WHEN REQUESTED
const Message = lazy(() => import('../components/view/Message'))

const Cart = ({match,location,history}) => {
    const dispatch = useDispatch()
    const productId = match.params.id
    const qty =  location.search ? Number(location.search.split('=')[1]) : 1
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

 useEffect(()=>{
     if(productId){
         dispatch(addToCart(productId,qty))
     }
    },[productId,qty,dispatch])


// HANDLERS
const removeFromCartHandler = id=>{
    dispatch(removeFromCart(id))
    console.log(id)
    //dispatch(removeFromCart(id))
}
const checkoutHandler = () =>{
    history.push(`/loging?redirect=shipping`)
}
    return (
        <Row>
          <Col md={8}>
          <h3 className="p-2 mb-5">SHOPPING CART</h3>
          {cartItems.length === 0 ? (
              <Message>
                  You have no items in your cart. <Link to="/">Add something to cart</Link>
              </Message>
          ):(
          <ListGroup variant="flush"> 
              {cartItems.map(item => (
                  <ListGroup.Item key={item.product_id}>
                      <Row>
                          <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded/>
                          </Col>
                          <Col md={3}>
                              <Link to={`/product/${item.product_id}`} style={{ textDecoration:'none'}}>{item.name} </Link>
                          </Col>
                          <Col md={2}>
                              Price: {item.price}
                          </Col>
                          <Col md={2}>
                             <Form.Control 
                                   as="select"
                                   value={item.quantity}
                                   onChange={(e)=>dispatch(addToCart(item.product_id,Number(e.target.value)))}
                                   >
                                     {
                                         [...Array(item.countInStock).keys()].map((i)=>{
                                             return <option key={i + 1} value={i + 1 }>{i + 1}</option>
                                            })
                                     }  
                             </Form.Control>
                          </Col>
                          <Col md={2}>
                              <Button 
                               type='button'
                               size='sm'
                               variant='danger'
                               onClick={() => removeFromCartHandler(item.product_id)}>
                                  <BiTrash/>
                             </Button>
                          </Col>
                      </Row> 
                </ListGroup.Item>
                
              ))}
        </ListGroup>
          )}
          </Col>
          <Col md={4}>
              <ListGroup>
                  <ListGroup.Item>
                      <h3> Subtotal {cartItems.reduce((acc,item)=> acc + item.quantity,0)} items</h3>
                  ${cartItems.reduce((acc,item)=> acc + item.quantity * item.price,0).toFixed(2)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <Button 
                      className="btn btn-primary btn-block w-100"
                      type='button'
                      disabled ={cartItems.length === 0}
                      onClick={checkoutHandler}
                      >
                      Proceed to Checkout
                      </Button>
                  </ListGroup.Item>
              </ListGroup>
          </Col>
        </Row>
    )
}

export default Cart
