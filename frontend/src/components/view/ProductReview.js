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

import PropsTypes from 'prop-types'

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
      <Grid container spacing={1} alignItems='center' justifyContent='center'>
        <List className={classes.root}>


          {reviews.map((review) => (
            <>
              <ListItem
                alignItems='flex-start'
                key={review._id}
                className={classes.ListItemMargin}
              >
                <ListItemAvatar>
                  <Avatar alt={review.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={<strong>{review.name}</strong>}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'
                      >
                        <Rating value={review.rating} />
                      </Typography>

                      <ListItemText
                        primary={review.comment}
                        secondary={review.createdAt.substring(0, 10)}
                      />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </>
          ))}
        </List>
      </Grid>
    );
}
ProductReview.propTypes = {
  product: PropsTypes.object.isRequired
}

export default ProductReview
