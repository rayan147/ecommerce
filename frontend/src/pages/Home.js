import React,{lazy, useEffect,Suspense} from 'react'
import listProducts from "../actions/product/listProducts"
import {useDispatch,useSelector} from 'react-redux'


import MapProducts from '../components/view/MapProducts'
const Message  = lazy(() => import('../components/view/Message'))

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
          <h1>Latest Produce</h1>
          <Suspense fallback={ isLoading && <Message>loading...</Message>}>
            {error ? <Message variant='danger'>{error}</Message> : <MapProducts 
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
