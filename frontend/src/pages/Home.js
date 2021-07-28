import React,{useEffect} from 'react'
import {listProducts} from "../actions/productActions"
import {useDispatch,useSelector} from 'react-redux'

import Loader from '../components/view/Loader'
import  Message from '../components/view/Message'
import MapProducts from '../components/view/MapProducts'

const Home = () => {
 const dispatch = useDispatch() 
 
 const productList = useSelector(state => state.productList)
 const {error,loading,products} = productList

  useEffect(() => {
   dispatch(listProducts())
  }, [dispatch])

    return (
        <>
          <h1>Latest Products</h1>
          {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : <MapProducts products={products}/>}
        
        </>
    )
}

export default Home
