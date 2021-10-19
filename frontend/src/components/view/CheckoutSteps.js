import React from 'react'

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PaymentIcon from '@material-ui/icons/Payment';
import ShopIcon from '@material-ui/icons/Shop';

import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';


import ListItemLink from  '../../layout/ListItemLink'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'1rem',
    marginBottom:'1rem'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card:{
    width:'100%',
    maxWidth:200,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
  }
}));

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid container justifyContent="center" spacing={5}>
      <Grid item> 
        {step1 ? (
      
          
         <Card className={classes.card}  >
          <ListItemLink  to='/login'>
            <Button startIcon={<LockOpenIcon/>}>Sign In </Button>
          </ListItemLink>
           </Card>
       
        ) : (
          <Button startIcon={<LockOpenIcon/>} disabled>Signed In</Button>
        )}
       
      </Grid>

      <Grid item>
        {step2 ? (
          <Card className={classes.card} >
          <ListItemLink to='/shipping'>
            <Button startIcon={<LocalShippingIcon/>}>Shipping</Button>
          </ListItemLink>
           </Card>
        ) : (
          <Button disabled startIcon={<LocalShippingIcon/>}>Shipping</Button>
        )}
      </Grid>

      <Grid item>
        {step3 ? (
          <Card className={classes.card}>
          <ListItemLink to='/payment'>
            <Button startIcon={<PaymentIcon/>}> Payment</Button>
          </ListItemLink>
           </Card>
        ) : (
          <Button disabled startIcon={<PaymentIcon/>}>Payment</Button>
        )}
      </Grid>

      <Grid item>
        {step4 ? (
          <Card className={classes.card} >
          <ListItemLink to='/placeorder'>
            <Button startIcon={<ShopIcon/>} >Place Order</Button>
          </ListItemLink>
           </Card>
        ) : (
          <Button disabled startIcon={<ShopIcon/>}>Place Order</Button>
        )}
      </Grid>
    </Grid>
    </Grid>
  )
}

export default CheckoutSteps