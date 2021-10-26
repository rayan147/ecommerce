
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid';


import {Link} from 'react-router-dom'
import { CardActions } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap', 
      height: '100%',
      width: '100%',
      marginBottom: '2rem',
      marginTop: '3rem',
      boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginBottom: '1rem',
        marginTop: '1rem',
      },

    
    },
  
   
    cover: {
      width: 150,
      height: 100,
      minWidth: 120,
      minHeight: 100,
      borderRadius:'7px'

      
    },
    content:{
        padding: '1rem',
        marginLeft: '2rem',
    },
   
  }));
  




const MapCart = ({cartItems,dispatch,addToCart,removeFromCartHandler}) => {
    const classes = useStyles();
    return (
        <Grid  spacing={1} justifyContent="center">
     
         <Card className={classes.root}> 
              {cartItems.map(item => ( 
                  <>
                  <Grid item lg={3} md={3} >
                    <CardMedia
                        className={classes.cover}
                        image={item.image}
                        title={item.name}/>
                        </Grid>
                        <Grid item lg={8} md={7}>
                  <CardContent key={item.product_id}  >
                     
                           
                       
                             
                              <Typography component="h5" variant="subtitle2" color="textSecondary"> 
                              <Link to={`/product/${item.product_id}`} style={{ textDecoration:'none',color:'black'}}>
                             <strong> {item.name} </strong>
                             </Link>
                             </Typography>
                                 
                                  
                         
                          <Typography gutterBottom color="secondary">
                             ${item.price}
                          </Typography>
                          
                            
                             <TextField
          id="countInStockId"
          select
          label={'Quantity'}
          value={item.quantity}
          onChange={(e)=>dispatch(addToCart(item.product_id,+(e.target.value)))}
        
        >
          {[...Array(item.countInStock).keys()].map((x)=>(
            <MenuItem key={x+1} value={x+1}>{x+1}</MenuItem>
          ))}
        </TextField>
                         
                          
                           
                            
                         
                   
                </CardContent>
                </Grid>
              
                 <Grid item lg={1} md={1}> 
                  <CardActions >
                <Button 
                size="small"
                 startIcon={ <DeleteIcon color="secondary"/>} 
                 onClick={() => removeFromCartHandler(item.product_id)}/>
                </CardActions>
                </Grid>
                </>
              ))}
        </Card>  
       
        </Grid>
    )
}

export default MapCart
