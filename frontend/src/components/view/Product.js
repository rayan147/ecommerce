import React from 'react'
import {Link} from 'react-router-dom'
import {Card,Row,Col,Container} from "react-bootstrap"
import Rating from './Rating'

import PropTypes from 'prop-types'

const Product = ({product}) => {
    const {_id,image,name,numReviews,rating,price } = product
    return (
<Container>
    <Row>
        <Col>
            <Card className="shadow-sm p-3 my-5  rounded  w-30" >
            
            <Link to={`/product/${_id}`} style={{ textDecoration:'none'}} >
                <Card.Img src={image} alt={name} className="img-fluid " variant='top' />
            </Link>
            <Card.Body>
              <Link to={`/product/${_id}`} style={{ textDecoration:'none'}} >
                <Card.Title as='div'  > <strong>{name}</strong></Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={rating} text={`${numReviews} reviews`}  />
            </Card.Text>
            <Card.Text as='h3'>
                ${price}
            </Card.Text>  
            </Card.Body>
            
        </Card> 
        </Col>
    </Row>
       
    </Container>
    )
}

Product.propTypes = {
   name: PropTypes.string.isRequired,
   _id: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   numReviews: PropTypes.number.isRequired,
   rating: PropTypes.number.isRequired,
   price: PropTypes.number.isRequired
}
Product.defaultProps = {
    name: '',
    _id:'',
    image: '',
    numReviews: 0,
    rating: 0,
    price: 0  
}
export default Product
