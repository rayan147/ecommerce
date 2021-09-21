import React,{useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FormSubmintReview from '../components/view/FormSubmintReview'
import listProductDetails from "../actions/product/listProductDetails"
import createProductReview  from '../actions/product/createProductReview'
import { Alert, AlertTitle } from '@material-ui/lab';
import PRODUCT_CONSTANTS from '../constants/productConstants'
import ProductReview from '../components/view/ProductReview'
import ProductCard from '../components/view/ProductCard'
import Container from '@material-ui/core/Container';



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
                    <ArrowBackIcon  size="large"/>
           </Link>
         
          {isLoading ? <h1>Almost  There ...</h1> : error ? <Alert   severity="error"><AlertTitle>{error}</AlertTitle></Alert> :(
              <>
              <ProductCard product={product} qty={qty} setQty={setQty} addToCartHandler={addToCartHandler}/>


       
          
              {product.reviews.length === 0 && <Alert   severity="error"><AlertTitle>No Reviews</AlertTitle></Alert>}
            
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
           
              </>
          )}
          
           
        </Container>
    )
}

export default Product
