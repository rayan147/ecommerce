import React,{lazy, useEffect,Suspense} from 'react'
import listProducts from "../actions/product/listProducts"
import {useDispatch,useSelector} from 'react-redux'


import  Message from '../components/view/Message'
import MapProducts from '../components/view/MapProducts'
const DelayedSpinner = lazy(() => import('../components/view/Loader'))

const Home = () => {
 const dispatch = useDispatch() 
 
 const productList = useSelector(state => state.productList)
 const {error,isLoading,products} = productList

  useEffect(() => {
   dispatch(listProducts())
  }, [dispatch])

    return (
        <>
          <h1>Latest Products</h1>
          <Suspense fallback={ isLoading && <DelayedSpinner/>}>
            {error ? <Message variant='danger'>{error}</Message> : <MapProducts products={products}/>}
          </Suspense>
        
        </>
    )
}

export default Home
