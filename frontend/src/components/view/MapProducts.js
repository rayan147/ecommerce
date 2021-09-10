
import Product from './Product'
import {Row,Col} from 'react-bootstrap'

import Paginate from './Paginate'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


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


const MapProducts = ({products,history,match,keyword,page,pages }) => {
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
          <Paginate 
            keyword={keyword }
            page={page}
            pages={pages}
            />
        </>
    )
}

MapProducts.propTypes = {
    products: PropTypes.array.isRequired
}


export default MapProducts
