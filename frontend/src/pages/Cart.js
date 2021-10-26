import React,{useEffect,useCallback} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';

import addToCart from "../actions/cart/addToCart"
import removeFromCart from "../actions/cart/removeFromCart"
import MapCart from '../components/view/MapCart'
import { CardActions, ListItemText } from '@material-ui/core';
import  roundDecimalToTwo from '../helpers/roundDecimalToTwo'






const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    subTotalItem: {
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
        marginTop: '3.3rem',
        
    },
  }));

const Cart = ({match,location,history}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const productId = match.params.id
    const qty =  +location?.search?.split('=')[1] ?? 1
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

 useEffect(()=>{
     if(productId){
         dispatch(addToCart(productId,qty))
     }
    },[productId,qty,dispatch])


// HANDLERS
const removeFromCartHandler =useCallback( id=>{
    dispatch(removeFromCart(id))
  
},[dispatch])

const subTotalItem =useCallback(()=>cartItems.reduce((acc,item)=> acc + item.quantity ,0),[cartItems])
const totalPrice = useCallback(()=>cartItems.reduce((acc,item)=> acc + item.quantity * item.price,0).toFixed(2),[cartItems])
cart.itemsPrice =roundDecimalToTwo( cart.cartItems.reduce((sum, item) => {
  return sum + item.price * item.quantity
}, 0))

cart.taxPrice =roundDecimalToTwo(cart.itemsPrice > 1 ? (cart.itemsPrice - 1).toFixed(2) * 0.1 : 0)
cart.totalPrice = roundDecimalToTwo(cart.itemsPrice + cart.shippingPrice + cart.taxPrice)
cart.shippingPrice = cart.itemsPrice < 35 ? 5 : 0
const checkoutHandler = useCallback(() => {
    history.push('/login?redirect=shipping')
  },[history])

    return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
          <Grid container spacing={1}>
          <Grid  item lg={7}>
          <Typography 
          component="div" 
          variant="h5" 
          className={classes.title}
          
          color="textSecondary">SHOPPING CART</Typography>
          {cartItems.length === 0 ? (
               <Alert severity="info">
               <AlertTitle>Info</AlertTitle>
               You have no items in your cart. <Link to="/">Add something to cart</Link>
             </Alert>
        
          ):(
           <MapCart 
           cartItems= {cartItems}
           dispatch= {dispatch}
           addToCart= {addToCart}
           removeFromCartHandler ={removeFromCartHandler} />
          )}
          </Grid>
          
          <Grid  item lg={4} md={8} sm={12} xs={12}>
          <Card className={classes.subTotalItem}>
            <CardContent>
              
            <List subheader={<ListSubheader><strong>Order Summary</strong></ListSubheader>} className={classes.root}>
           
                <ListItem>
                <ListItemText  secondary={`Total items`} />
                <ListItemSecondaryAction>
                <Typography>{subTotalItem()}</Typography>
                </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                <ListItemText  secondary={`Subtotal`} />
                <ListItemSecondaryAction>
                <Typography>${totalPrice()}</Typography>
                </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                <ListItemText  secondary={`Estimated delivery fee`} />
                <ListItemSecondaryAction>
                <Typography>{cart.shippingPrice === 0 ? "Free": `$${cart.shippingPrice}` }</Typography>
                </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                <ListItemText  secondary={`Estimated taxes`} />
                <ListItemSecondaryAction>
                <Typography>${ cart.taxPrice}</Typography>
                </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                <ListItemText  primary={<strong>Estimated total </strong>} />
                <ListItemSecondaryAction>
                <Typography><strong>${ cart.totalPrice}</strong></Typography>
                </ListItemSecondaryAction>
                </ListItem>
          
              </List>
              
              
              
           
 <Button 
                      variant="contained"
                      type='button'
                      fullWidth
                      color="primary"
                      disabled ={cartItems.length === 0}
                      onClick={checkoutHandler}
                      >
                      Proceed to Checkout
                      </Button>
                     
            </CardContent>
              <CardActions>
                 <Typography variant="body2" gutterBottom>Orders over 35 dollars (before taxes) have free shipping</Typography>
              </CardActions>
            
              </Card>
          </Grid>
          </Grid>
        </Grid>
        </Grid>
    )
}

export default Cart
