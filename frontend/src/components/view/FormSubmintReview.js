
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
     
      
    },
    item: {
      margin: theme.spacing(2),
    },
    card:{
        width:'100%',
        boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'
    }
  }));
  
const optionsArray=[
    {value:'',
     label:'Select'
    },
    {value:1,
     label:'Poor'
    },
    {value:2,
     label:'Fair'
    },
    {value:3,
     label:'Good'
    },
    {value:4,
     label:'Very Good'
    },
    {value:5,
     label:'Excellent'
    },
]

const FormSubmintReview = ({
    submitHandler,
    loadingProductReview,
    handleChangeValue,
    handleChangeComment,
    comment,
    rating
}
    ) => {

    const classes = useStyles();
   
    
    return (
      <Grid className={classes.root}>
        <Grid justifyContent='center' spacing={1}>
          <Card className={classes.card}>
            <form onSubmit={submitHandler} noValidate autoComplete='off'>
              <CardContent>
                <Grid item xs className={classes.item}>
                  <TextField
                    id='options'
                    select
                    label='Select'
                    value={rating}
                    onChange={handleChangeValue}
                    helperText='Please rate your purchase with us.'
                  >
                    {optionsArray.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}-{option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs className={classes.item}>
                  <TextField
                    id='outlined-multiline-static'
                    label='Customer reviews'
                    multiline
                    rows={4}
                    variant='outlined'
                    value={comment}
                    onChange={handleChangeComment}
                  />
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  disabled={loadingProductReview}
                  type='submit'
                  variant='contained'
                  color='primary'
                >
                  Submit
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    );
}


FormSubmintReview.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    loadingProductReview: PropTypes.bool.isRequired,
    handleChangeValue: PropTypes.func.isRequired,
    handleChangeComment: PropTypes.func.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

export default FormSubmintReview
