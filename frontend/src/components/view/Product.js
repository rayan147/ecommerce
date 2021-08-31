import {useState}from 'react'
import {Link} from 'react-router-dom'
import {Card,Button} from "react-bootstrap"
import Rating from './Rating'

import PropTypes from 'prop-types'

const Product = ({product,history,match }) => {
    const [qty,setQty] = useState(1)
    const {_id,image,name,numReviews,rating,price } = product
    const addToCartHandler = () => { 
        history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
    return (

    
            <Card  className="shadow-sm p-2 my-5  rounded  h-70" >
            
            <Link to={`/product/${_id}`} style={{ textDecoration:'none'}} >
                <Card.Img src={image} alt={name} className="img-fluid rounded" variant='top' />
            </Link>
            <Card.Body>
              <Link to={`/product/${_id}`} style={{ textDecoration:'none'}} >
                <Card.Title as='div'  > <strong>{`${name}`.substr(0,15)}</strong></Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={rating} text={`${numReviews} reviews`}  />
            </Card.Text>
            <Card.Text as='h3'>
                ${price}
            </Card.Text>  
            </Card.Body>
            <Button onClick={addToCartHandler} className="rounded" type="button" variant="primary rounded m-2 w-60">Add to Cart</Button>
        </Card> 
      
  
       
  
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
