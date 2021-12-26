import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    width: '100%',
    marginTop: '0',
    marginLeft: 'auto',
    paddingBottom: '2rem',
    boxShadow: 'none',

    
 
  },
  title: {
    fontSize: 12,
  },
    pos: {
        marginLeft: 1,
        marginRight: 1,
    },

});


const PlaceOrderIn = ({title,userInfo,payment='Paypal'}) => {


   
    const shippingAddress = localStorage.getItem('shippingAddress')
    const parsedShippingAddress = JSON.parse(shippingAddress)
    const {address,city,_state,zipCode,country} = parsedShippingAddress
    const {email,name} = userInfo;
    const classes = useStyles();

 
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant='h5' component='h2' gutterBottom>
            {title}
          </Typography>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            <strong> Name: </strong> {name}
          </Typography>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            <strong> Email: </strong> {email}
          </Typography>
          <Typography variant='body2' component='span'>
            <List dense component='nav' aria-label='adress'>
              {/* {shippingAddressList} */}
              <strong> Address:</strong>
              <ListItem>
                <ListItemText
                  primary={address}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        color='textPrimary'
                        className={classes.pos}
                      >
                        {city},
                      </Typography>
                      <Typography
                        component='span'
                        variant='body2'
                        color='textPrimary'
                        className={classes.pos}
                      >
                        {_state},
                      </Typography>
                      <Typography
                        component='span'
                        variant='body2'
                        color='textPrimary'
                        className={classes.pos}
                      >
                        {zipCode}
                      </Typography>
                      <Typography
                        component='span'
                        variant='body2'
                        color='textPrimary'
                        className={classes.pos}
                      >
                        {country}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {/* {title === 'BILLING' && (<ListItem>  
               <ListItemText primary={<strong>Payment Method</strong>} secondary={
                <React.Fragment>
                <Typography component="span" variant="body2" color="textPrimary" className={classes.pos}>
                  {payment?.paymentMethod ?? 'Paypal'}
                </Typography>
                </React.Fragment>
            } />
            </ListItem>)} */}
            </List>
          </Typography>
        </CardContent>
      </Card>
    );
}

export default PlaceOrderIn
