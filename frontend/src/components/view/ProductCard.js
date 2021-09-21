import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import Rating from './Rating'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: '100%',
      width: '100%',
      marginBottom: '2rem',
      marginTop: '3rem',
      boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginBottom: '1rem',
        marginTop: '1rem',
      },

    
    },
  
   
    cover: {
      width: 400,
      height: 400,
      minWidth: 200,
      minHeight: 200,
      boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
      
    },
   
  }));
const ProductCard = ({product,addToCartHandler,qty,setQty}) => {
  const {countInStock,image,name,numReviews,price,description } = product
    const classes = useStyles();
    return (
        <Grid container spacing={5} justifyContent="center">
           <Card className={classes.root}>
           <Grid item xs >
           <CardMedia
        className={classes.cover}
        image={image}
        title={name}
      />
      </Grid>
      <Grid item>
        <CardContent >
            <Typography variant="subtitle1" color="secondary">
           ${price}
          </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            <Rating value={product.rating} text={`${numReviews} rating`}/>
          </Typography>
          <Typography gutterBottom >
          <strong>  {name}</strong>
          </Typography>
        
          <Typography variant="body2" color="textSecondary"  gutterBottom>
  
           {description}
          </Typography>
          {countInStock > 0 && (
           <TextField
          id="countInStockId"
          select
          label={countInStock > 0 ? <strong style={{color:'green'}}>In stock</strong> : 'Out of stock'}
          value={qty}
          onChange={(e)=>setQty(e.target.value)}
          helperText="Please select your quantity"
        >
          {[...Array(countInStock).keys()].map((x)=>(
            <MenuItem key={x+1} value={x+1}>{x+1}</MenuItem>
          ))}
        </TextField>
        )}
      
        </CardContent>
       
        <CardActions>
         <Button variant="contained" color="primary" onClick={addToCartHandler} disabled={countInStock === 0}>
          Add to cart
        </Button>
      </CardActions>
  </Grid>
     
    </Card>  
        </Grid>
    )
}

export default ProductCard
