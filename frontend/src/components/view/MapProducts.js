
import Product from './Product'
import {Row,Col} from 'react-bootstrap'

import PropTypes from 'prop-types'


const MapProducts = ({products }) => {
    return (
        <>
           <Row>
             { products.map( product => (
                 <Col key={product._id}>
                    <h3 key={product._id}>{product.name}</h3>
                    <Product product={product}/>
                 </Col>
             ))
            }
          </Row>   
        </>
    )
}

MapProducts.propTypes = {
    products: PropTypes.array.isRequired
}

MapProducts.defaultProps = {
    products: []
}
export default MapProducts
