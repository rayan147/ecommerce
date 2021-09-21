import React,{useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button,Form,Container} from 'react-bootstrap'
import {IoArrowBackOutline} from 'react-icons/io5'

import FormSubmintReview from '../components/view/FormSubmintReview'
import Rating from '../components/view/Rating'
import listProductDetails from "../actions/product/listProductDetails"
import createProductReview  from '../actions/product/createProductReview'
import { Alert, AlertTitle } from '@material-ui/lab';
import PRODUCT_CONSTANTS from '../constants/productConstants'
import ProductReview from '../components/view/ProductReview'
import ProductCard from '../components/view/ProductCard'



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
  const handleChangeValue = (e)=>{
    e.preventDefault()
    setRating(e.target.value)
 }
 const handleChangeComment = (e)=>{
    e.preventDefault()
    setComment(e.target.value)
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
         
          {isLoading ? <h1>Almost  There ...</h1> : error ? <Alert   severity="error"><AlertTitle>{error}</AlertTitle></Alert> :(
              <>
              <ProductCard product={product} qty={qty} setQty={setQty} addToCartHandler={addToCartHandler}/>
{/* <Row className="d-flex align-items-center justify-content-center " >
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
           
        </Row > */}

        <Row>
            <Col md={6}>
          
              {product.reviews.length === 0 && <Alert   severity="error"><AlertTitle>No Reviews</AlertTitle></Alert>}
              <ListGroup variant='flush'>
                <ProductReview product={product}/> 
                <>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <>
                      <Alert   severity="success"><AlertTitle>Review submitted successfully</AlertTitle></Alert>
                   </>
                   
                  )}
                  {loadingProductReview && <h4>Loading...</h4>}
                  {errorProductReview && (
                    <>
                    <Alert   severity="error"><AlertTitle>{errorProductReview}</AlertTitle></Alert>
                    </>
                    
                  )}
                  {userInfo ? (
                   
                    <FormSubmintReview 
                    submitHandler={submitHandler} 
                    loadingProductReview={loadingProductReview}
                    handleChangeValue={handleChangeValue}
                    handleChangeComment={handleChangeComment}
                    comment={comment}
                    rating={rating}
                    />
                  ) : (
                    <>
                    <Alert   severity="info"><AlertTitle>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                      </AlertTitle></Alert>
                    </>
                  
                  )}
                </>
              </ListGroup>
            </Col>
          </Row>
              </>
          )}
          
           
        </Container>
    )
}

export default Product
