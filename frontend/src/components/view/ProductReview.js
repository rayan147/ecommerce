import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';

import Rating from "./Rating"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  ListItemMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));
const ProductReview = ({product}) => {
    const classes = useStyles();
    const {reviews} =product
    return (
        <Grid 
        container 
        spacing={1} 
        alignItems="center"
        justifyContent="center">
            <List className={classes.root}>
              <ListItem alignItems="flex-center">
                <ListItemText primary={
                    <Typography variant="h6" component="h6">
                        <strong>Customer Reviews</strong>
                    </Typography>
                }
                secondary={
                  <>
                    <Rating value={product.rating} 
                text={
                  `${product.rating}`}
                  />
                  <Typography variant="body2" component="p">
                    {product.reviews.length} customer reviews
                  </Typography>
                  </>
                }
                
                >

                </ListItemText>
                {/* <ListItemText primary={
                  <>
                  <Typography   variant="h6" gutterBottom>
                <strong> Customer reviews </strong>
                </Typography> 
                
                  </>
              } 
              secondary={
                  <>
             
                
            
                   <ListItemText primary='Customer reviews' secondary={
                     <>
                      <Typography component='span'  variant="h5" gutterBottom>
                    <strong> {`${product.rating} out of ${reviews.length}`} </strong>
                    </Typography>
                    </>
                     } />
                </>
                } /> */}
              </ListItem>
          
                {reviews.map((review)=>
                <>
      <ListItem alignItems="flex-start" key={review._id} className={classes.ListItemMargin}>
        <ListItemAvatar>
          <Avatar alt={review.name}  />
        </ListItemAvatar>
        <ListItemText
          primary={<strong>{review.name}</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               <Rating value={review.rating} />
              </Typography>
              
           <ListItemText primary={review.comment} secondary={review.createdAt.substring(0, 10)} />   
            </React.Fragment>
          }
        />
        
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
                )}
      </List>
        </Grid>
    )
}

export default ProductReview
