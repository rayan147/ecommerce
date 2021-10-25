import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Meta from './Meta';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: '100%',
      width: '71%',
      marginBottom: '3rem',
      marginTop: '3rem',
      boxShadow: 'none',
      [theme.breakpoints.down('md')]: {
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
      borderRadius: '7px',
      
    },
   
  }));
const ProductCard = ({product,addToCartHandler,qty,setQty}) => {
  const {countInStock,image,name,numReviews,price,description } = product
    const classes = useStyles();
    return (
        <Grid 
        container 
        spacing={1} 
        alignItems="center"
        justifyContent="center">
           <Meta title={name} description={description} keywords={description}/>
           <Card className={classes.root}>
           <Grid item xs>
           <CardMedia
        className={classes.cover}
        image={image}
        title={name}
      />
      </Grid>
      <Grid item xs>
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
