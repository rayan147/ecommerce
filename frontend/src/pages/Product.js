import React,{useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button,Form,Container} from 'react-bootstrap'
import {IoArrowBackOutline} from 'react-icons/io5'

import DelayedSpinner from '../components/view/Loader'
import  Message from '../components/view/Message'
import Rating from '../components/view/Rating'
import listProductDetails from "../actions/product/listProductDetails"
import createProductReview  from '../actions/product/createProductReview'

import PRODUCT_CONSTANTS from '../constants/productConstants'

const {PRODUCT_CREATE_REVIEW_RESET} = PRODUCT_CONSTANTS

const Product = ({history,match}) => {
    const [qty,setQty] = useState(1)
    const dispatch = useDispatch()
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const productDetails = useSelector(state => state.productDetails)

    const {error,isLoading,product} = productDetails
    const productReviewCreate = useSelector((state) => state.productReviewCreate)
    const {
      success: successProductReview,
      loading: loadingProductReview,
      error: errorProductReview,
    } = productReviewCreate

    const {countInStock,image,name,numReviews,price,description } = product

    useEffect(() => {
        if (successProductReview) {
          setRating(0)
          setComment('')
        }
        if (!product._id || product._id !== match.params.id) {
          dispatch(listProductDetails(match.params.id))
          dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }
      }, [dispatch, match, successProductReview,product._id])

// Handlers
  const addToCartHandler = () => { 
        history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
   const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    )
  }   
    return (
        <Container className="">
           <Link  to='/'>
                    <IoArrowBackOutline  size="2.5rem" color="black"/>
           </Link>
         
          {isLoading ? <DelayedSpinner/> : error ? <Message variant="danger">{error}</Message> :(
              <>
<Row className="d-flex align-items-center justify-content-center " >
             <Col md={6}>
               <Image src={image} alt={name} fluid className="shadow-sm p-3 mb-5  rounded"/>
             </Col>
             <Col md={6} >
               <ListGroup variant="flush">
                   <ol>
                       <strong className='fs-3'>{name}</strong>
                   </ol>               
                   <ol>
                      <Rating value={product.rating} text={`${numReviews}`}/>
                   </ol>               
                   <ol>
                     Price: ${price}
                   </ol>               
                   <ol>
                     Description: {description}
                   </ol>               
               </ListGroup>
             </Col>
            <Col>
                
               <Card>
                   <ListGroup variant="flush">
                       <ol>
                           <Row>
                               <Col>
                               Price:
                               </Col>
                               <Col>
                               <strong>{price}</strong>
                               </Col>
                           </Row>
                       </ol>
                       <ol>
                           <Row>
                               <Col>
                               Status:
                               </Col>
                               <Col>
                               {countInStock > 0 ? 'In stock' : 'Out of stock'}
                               </Col>
                           </Row>
                       </ol>
                       {countInStock > 0 && (
                           <ol>
                               <Row>
                                   <Col>
                                   Quantity:
                                   </Col>
                                   <Col>
                                   <Form.Control 
                                   as="select"
                                   value={qty}
                                   onChange={(e)=>setQty(e.target.value)}
                                   >
                                     {
                                         [...Array(countInStock).keys()].map((i)=>{
                                             return <option key={i + 1} value={i + 1 }>{i + 1}</option>
                                            })
                                     }  
                                   </Form.Control>
                                   </Col>
                               </Row>
                           </ol>
                       )}
                       <ol>
                           <Button onClick={addToCartHandler} className="rounded" type="button" disabled={countInStock === 0}>
                               Add to cart
                           </Button>
                       </ol>
                   </ListGroup>        
               </Card>   
            </Col>  
        </Row >
        <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant='success'>
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <h4>Loading...</h4>}
                  {errorProductReview && (
                    <Message variant='danger'>{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type='submit'
                        variant='primary'
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
              </>
          )}
          
           
        </Container>
    )
}

export default Product
