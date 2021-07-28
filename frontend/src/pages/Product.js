import React,{useState,useEffect} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {listProductDetails} from "../actions/productActions"
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button,Form} from 'react-bootstrap'
import {IoArrowBackOutline} from 'react-icons/io5'

import Loader from '../components/view/Loader'
import  Message from '../components/view/Message'
import Rating from '../components/view/Rating'

const Product = ({history,match}) => {
    const [qty,setQty] = useState(0)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {error,loading,product} = productDetails
    const {countInStock,image,name,numReviews,rating,price,description } = product


    useEffect(() => {
      dispatch(listProductDetails(match.params.id))
    }, [dispatch,match.params.id])
    
// Handlers
  const addToCartHandler = () => { 
        history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
    
    return (
        <>
           <Link  to='/'>
                    <IoArrowBackOutline  size="2.5rem" color="black"/>
           </Link>
         
          {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> :(
              <>
<Row className="mt-5">
             <Col md={6}>
               <Image src={image} alt={name} fluid/>
             </Col>
             <Col md={3}>
               <ListGroup >
                   <ListGroup.Item>
                       <h4>{name}</h4>
                   </ListGroup.Item>               
                   <ListGroup.Item>
                      <Rating value={rating} text={`${numReviews} reviews`}/>
                   </ListGroup.Item>               
                   <ListGroup.Item>
                     Price: ${price}
                   </ListGroup.Item>               
                   <ListGroup.Item>
                     Description: {description}
                   </ListGroup.Item>               
               </ListGroup>
             </Col>
            <Col md={3}>
               <Card>
                   <ListGroup variant="flush">
                       <ListGroup.Item>
                           <Row>
                               <Col>
                               Price:
                               </Col>
                               <Col>
                               <strong>{price}</strong>
                               </Col>
                           </Row>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Row>
                               <Col>
                               Status:
                               </Col>
                               <Col>
                               {countInStock > 0 ? 'In stock' : 'Out of stock'}
                               </Col>
                           </Row>
                       </ListGroup.Item>
                       {countInStock > 0 && (
                           <ListGroup.Item>
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
                                             return <option key={i + 1} value={i}>{i + 1}</option>
                                            })
                                     }  
                                   </Form.Control>
                                   </Col>
                               </Row>
                           </ListGroup.Item>
                       )}
                       <ListGroup.Item>
                           <Button onClick={addToCartHandler} className="btn-block w-100" type="button" disabled={countInStock === 0}>
                               Add to cart
                           </Button>
                       </ListGroup.Item>
                   </ListGroup>        
               </Card>   
            </Col>  
        </Row>
              </>
          )}
          
           
        </>
    )
}

export default Product
