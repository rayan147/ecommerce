import {useEffect,useState} from 'react'


import { Alert } from '@material-ui/lab';
import Carousel from 'react-material-ui-carousel'

import {useDispatch,useSelector} from 'react-redux'
import { Box ,Typography} from '@material-ui/core'

import listTopProducts from '../../actions/product/listTopProducts'
import Product from './Product';







const ProductCarousel = () => {
const dispatch = useDispatch()
const productTopRated = useSelector(state => state.productTopRated)
const {loading,error,products}= productTopRated
const [items,setItems] =useState([])
useEffect(()=>{
    dispatch(listTopProducts())
},[dispatch])





useEffect(()=>{
    
    const pushImagesCarouselTosaparateArray = ()=>{
        const sliderItems = products.length > 5 ? 5 : products.length
        const  sliderItemsArr= []
        for (let i = 0; i < products.length; i+= sliderItems) {
            sliderItemsArr.push(
                <div key={i}>
                    <Box display="flex" justifyContent="center"  >
                        {products.slice(i, i + sliderItems).map((product, index) => (
        
                            <Product key={index} product={product} />
                        ))}
                    </Box>
                </div>
            )
            
        }
        setItems(sliderItemsArr)
        return sliderItemsArr
        }
        if(products.length>0 && !loading){
            console.log({products})
          pushImagesCarouselTosaparateArray()
       }
    return ()=> {
        pushImagesCarouselTosaparateArray()
        setItems([])
    }
},[products,loading])





    return (
        <>
      
        {loading && <Alert severity="info">Loading...</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        {!loading && !error && products && (
            <>
             <Typography style={{marginTop:'5rem',marginBottom:'2rem'}} variant="h6" gutterBottom >TOP PRODUCTS</Typography>
            <Carousel animation="slide" autoPlay={false} cycleNavigation timeout={300}>
               {items}
            </Carousel>
            </>
        )}
        </>
    )
}

export default ProductCarousel
