import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import Rating from "./Rating"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));
const ProductReview = ({product}) => {
    const classes = useStyles();
    const {reviews} =product
    return (
        <>
            <List className={classes.root}>
                <Typography component='span'  variant="h5" gutterBottom>
                    Reviews
                </Typography>
                {reviews.map((review)=>
                <>
      <ListItem alignItems="flex-start" key={review._id}>
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
        </>
    )
}

export default ProductReview
