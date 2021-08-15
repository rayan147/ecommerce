import React,{useEffect,lazy,useCallback} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,ListGroup,Button} from 'react-bootstrap'


import addToCart from "../actions/cart/addToCart"
import removeFromCart from "../actions/cart/removeFromCart"
import MapCart from '../components/view/MapCart'

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
  
}

const subTotalItem =useCallback(()=>cartItems.reduce((acc,item)=> acc + item.quantity,0),[cartItems])
const totalPrice = useCallback(()=>cartItems.reduce((acc,item)=> acc + item.quantity * item.price,0).toFixed(2),[cartItems])


const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
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
           <MapCart 
           cartItems= {cartItems}
           dispatch= {dispatch}
           addToCart= {addToCart}
           removeFromCartHandler ={removeFromCartHandler} />
          )}
          </Col>
          <Col md={4}>
              <ListGroup>
                  <ol>
                      <h3> Subtotal {subTotalItem()} items</h3>
                  ${totalPrice()}
                  </ol>
                  <ol>
                      <Button 
                      className="btn btn-primary btn-block w-100 rounded"
                      type='button'
                      disabled ={cartItems.length === 0}
                      onClick={checkoutHandler}
                      >
                      Proceed to Checkout
                      </Button>
                  </ol>
              </ListGroup>
          </Col>
        </Row>
    )
}

export default Cart
