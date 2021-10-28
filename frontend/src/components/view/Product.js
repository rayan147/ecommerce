
import {Link} from 'react-router-dom'

import Rating from './Rating'

import PropTypes from 'prop-types'



import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import trancateString from '../../helpers/trancateString'



 const useStyles = makeStyles({
        root: {
          margin:'auto',
          maxHeight:230,
          maxWidth: 150,
          minHeight: 230,
          minWidth:170,
          borderRadius:'9px',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
          '&:hover': {
            transform: 'scale(1.01)',
            transition: 'all 0.3s ease-in-out',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'


          },
        },
        cover: {
          width: 180,
          height: 110,
          minWidth: 180,
          minHeight: 110,
          
          
        },
      });



const Product = ({product }) => {
    const classes = useStyles();
    const {_id,image,name,description,rating,price } = product

    const truncatedDescription = trancateString(description)
      
    return (
      <>
        <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
          <Card className={classes.root}>
            <CardActionArea>
              {
                <CardMedia
                  className={classes.cover}
                  image={image}
                  alt={name}
                  component='img'
                />
              }
              <CardContent>
                <Typography display='block'>
                  {`${name}`.substr(0, 15)}
                </Typography>
                <Typography>
                  <Rating value={rating} />
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                  {truncatedDescription}
                </Typography>

                <Typography variant='overline' display='block' gutterBottom>
                  ${price}/<small>lb</small>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </>
    );
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
