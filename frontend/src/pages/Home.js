import React,{useEffect,Suspense} from 'react'
import listProducts from "../actions/product/listProducts"
import {useDispatch,useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import MapProducts from '../components/view/MapProducts'
import ProductCarousel from '../components/view/ProductCarousel'
import Meta from '../components/view/Meta';



const Home = ({history,match}) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber ||  1


 const dispatch = useDispatch() 
 
 const productList = useSelector(state => state.productList)
 const {error,isLoading,products,page,pages} = productList

  useEffect(() => {
   dispatch(listProducts(keyword,pageNumber))
  }, [dispatch,keyword,pageNumber])

    return (
        <>
        
         
           <Meta/>
          <Suspense fallback={ isLoading && <h3 className="text-center">Almost There..</h3>}>
           {!keyword ? <ProductCarousel />: (
             <>
           <Link style={{textDecoration:'none',marginTop:'3rem'}}to="/">
           <Button >Back to Home</Button>  
             </Link>
             </>
             )
             }
            {error ? <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
   <strong>{error}</strong>
</Alert>: (
  <>
  <Typography style={{marginTop:'5rem',marginBottom:'2rem'}} variant="h6" gutterBottom >LATEST PRODUCTS</Typography>
<MapProducts 
            products={products} 
            history={history} 
            match={match} 
            keyword={keyword}
            page={page}
            pages={pages}

            />
            </>)
            
            }
          </Suspense>
        
        </>
    )
}

export default Home
