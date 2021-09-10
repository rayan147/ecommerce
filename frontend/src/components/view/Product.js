
import {Link} from 'react-router-dom'

import Rating from './Rating'

import PropTypes from 'prop-types'



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';



 const useStyles = makeStyles({
        root: {
          width:'100%',
          heigh:'100%',
          margin:'auto',
          maxHeight:310,
          maxWidth: 140,
          borderRadius:'9px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
        },
      });



const Product = ({product }) => {
    const classes = useStyles();
    const {_id,image,name,numReviews,rating,price } = product

   
      
    return (
<>
      { product ?( 
        <>
      <Link to={`/product/${_id}`} style={{ textDecoration:'none'}} >
            <Card  className={classes.root} >
            <CardActionArea>
          
               { <CardMedia 
                image={image} 
                alt={name} 
                component="img"  />
               }
            <CardContent>
           
              <Typography gutterBottom >{`${name}`.substr(0,15)}
              </Typography>
         
            <Typography>
                <Rating value={rating} text={`${numReviews} reviews`}  />
            </Typography>
            <Typography>
                ${price}
            </Typography>  
         
            </CardContent>
       </CardActionArea> 
       </Card> 
       </Link>
       </>
  ): (

    <Skeleton variant="rect" width={210} height={310} />
    )
    
}
      </>
  
       
  
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
