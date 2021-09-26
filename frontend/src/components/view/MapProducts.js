
import Product from './Product'



import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const MapProducts = ({products,history,match,keyword,page,pages,isAdmin=false }) => {
  const classes = useStyles();
    return (
        <>
          <Grid container className={classes.root} spacing={3}>
          <Grid item xs={12}>
           <Grid container justifyContent="center" spacing={3}>
             { products.map( product => (
                 <>
                 <Grid  key={product._id} item>
                    <Product key={product._id} product={product} history={history} match={match}/>
                 </Grid>
                 </>
             ))
            }
         
         </Grid>
         </Grid>
         </Grid> 
    
     
            <Pagination
              page={page}
              count={pages}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={
                    !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${item.page + 1}`
                  : `/page/${item.page}`
                : `/admin/productlist/${item.page + 1}`}
                  {...item}
                />
              )}
            />
  
        </>
    )
}

MapProducts.propTypes = {
    products: PropTypes.array.isRequired
}


export default MapProducts
