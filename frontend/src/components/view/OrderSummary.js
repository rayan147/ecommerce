import {useCallback} from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

import OrderItemSummary from './OrderItemSummary';

const useStyles = makeStyles({
    root: {
      minWidth: 205,
      marginTop: '20px',
      boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
      minHeight: '650px'
      
    },
    title: {
      fontSize: 14,
    },
   
  });

const OrderSummary = ({cart,placeOrderHandler,error}) => {
   
    const {cartItems,itemsPrice,shippingPrice,taxPrice,totalPrice} = cart;
    const classes = useStyles();
    const subTotalItem =useCallback(()=>cartItems.reduce((acc,item)=> acc + item.quantity ,0),[cartItems])
    return (
      <Grid container>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom>
              <strong> Order Summary </strong>
            </Typography>
            {cartItems.legth === 0 && (
              <Alert severity='info'>
                <AlertTitle>Info</AlertTitle>
                Your cart is empty
              </Alert>
            )}

            <List>
              {cartItems.map((item) => (
                <>
                  <ListItem key={item.product_id}>
                    <OrderItemSummary key={item.product_id} item={item} />
                  </ListItem>
                </>
              ))}
            </List>
            <List dense>
              <ListItem>
                <ListItemText secondary={`Total items`} />
                <ListItemSecondaryAction>
                  <Typography>{subTotalItem()}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary='Subtotal' />${itemsPrice}
              </ListItem>
              <ListItem>
                <ListItemText primary='Tax' />${taxPrice}
              </ListItem>
              <ListItem>
                <ListItemText primary='Shipping' />${shippingPrice}
              </ListItem>
              <ListItem>
                <ListItemText primary='Total' />
                <strong>${totalPrice}</strong>
              </ListItem>
            </List>
            {error && (
              <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}
            <Button
              disabled={cartItems === 0}
              type='button'
              fullWidth
              variant='contained'
              color='primary'
              onClick={placeOrderHandler}
            >
              Place Order
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
}

export default OrderSummary
