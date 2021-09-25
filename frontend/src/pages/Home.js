import React,{useEffect,Suspense} from 'react'
import listProducts from "../actions/product/listProducts"
import {useDispatch,useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';

import MapProducts from '../components/view/MapProducts'
import { Alert, AlertTitle } from '@material-ui/lab';

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
          <Typography style={{marginTop:'5rem',marginBottom:'5rem'}} variant="h3" gutterBottom >Latest Produce</Typography>
          <Suspense fallback={ isLoading && <h3 className="text-center">Almost There..</h3>}>
            {error ? <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
   <strong>{error}</strong>
</Alert>: <MapProducts 
            products={products} 
            history={history} 
            match={match} 
            keyword={keyword}
            page={page}
            pages={pages}

            />}
          </Suspense>
        
        </>
    )
}

export default Home
