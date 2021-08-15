
import Product from './Product'
import {Row,Col,Container} from 'react-bootstrap'

import PropTypes from 'prop-types'


const MapProducts = ({products }) => {
    return (
        <Container>
           <Row >
             { products.map( product => (
                 <Col key={product._id} sm={4} md={4} lg={3} xs={12}>
                    <p className="fs-5" key={product._id}>{product.name}</p>
                    <Product product={product}/>
                 </Col>
             ))
            }
          </Row>   
        </Container>
    )
}

MapProducts.propTypes = {
    products: PropTypes.array.isRequired
}


export default MapProducts
