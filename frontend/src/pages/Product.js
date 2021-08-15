import React,{useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button,Form,Container} from 'react-bootstrap'
import {IoArrowBackOutline} from 'react-icons/io5'

import DelayedSpinner from '../components/view/Loader'
import  Message from '../components/view/Message'
import Rating from '../components/view/Rating'
import listProductDetails from "../actions/product/listProductDetails"
import AddToCard from '../components/view/AddToCard'

const Product = ({history,match}) => {
    const [qty,setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {error,isLoading,product} = productDetails
    const {countInStock,image,name,numReviews,rating,price,description } = product


    useEffect(() => {
      dispatch(listProductDetails(match.params.id))
    }, [dispatch,match.params.id])
 // QTY Selection

// Handlers
  const addToCartHandler = () => { 
        history.push(`/cart/${match.params.id}?qty=${qty}`)
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
                      <Rating value={rating} text={`${numReviews}`}/>
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
        {/* <Row  className="bg-danger ">
            <Col >
                <AddToCard price={price} quantity={qty}/>
            </Col>
        </Row> */}
              </>
          )}
          
           
        </Container>
    )
}

export default Product
