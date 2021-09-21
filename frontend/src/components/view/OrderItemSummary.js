import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 200,
    maxWidth: 400,
    width: 400


  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
//   content: {
//     flexGrow: 1,
//   },
  cover: {
    width:152,
    height: 138,
    padding: theme.spacing(2),
  },

}));

const OrderItemSummary = ({item}) => {
    const classes = useStyles();
  
  return (
    <Card className={classes.root}>
    <CardMedia
      className={classes.cover}
      image={item.image}
      title={item.name}
    />
    <div >
      <CardContent>
        <Typography >
        <Link to={`/product/${item.product_id}`} style={{ textDecoration:'none'}}>
          {item.name}
          </Link>
        </Typography>
        <Typography  
        >
     <strong>   {item.price} * {item.quantity} =  {item.price} * {item.quantity} </strong>
        </Typography>
      </CardContent>
        
    </div>
  
  </Card>
  );
}

export default OrderItemSummary
