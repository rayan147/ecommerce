import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles({
  root: {
    minWidth: 375,
    maxWidth: 'calc(100vw - 975px)',
    width: '100%',
    margin: '0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
 const AddToCart = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
      <CardContent>
        <Box display="flex"  alignContent="flex-start" justifyContent="center">
          <Box >
           <Typography alignItems="flex-start"  gutterBottom className={classes.title} color="textSecondary">
         Select quantity
        </Typography> 
        <Box display="flex" alignItems="center" justifyContent="center">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           
          <Button 
          size="small"  startIcon={<RemoveIcon/>
         

          }
        
          >
            </Button> 
           0
           <Button 
          startIcon={<AddIcon/>}
        
          >
            </Button>
        </Typography> 
        </Box>
        
          </Box>
        </Box>
        <Box display="flex"  justifyContent="flex-end" alignItems="flex-end">
          <Box m={2}>
           <Typography className={classes.title} color="textSecondary" component='h6' gutterBottom>
         <strong>Price</strong>
        </Typography> 
        <Button variant="contained" color="primary" size="small">
               Add to cart
             </Button>
          </Box>
          
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    )
}
export default AddToCart