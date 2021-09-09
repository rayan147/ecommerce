
import Product from './Product'
import {Row,Col} from 'react-bootstrap'

import Paginate from './Paginate'
import PropTypes from 'prop-types'


const MapProducts = ({products,history,match,keyword,page,pages }) => {
    return (
        <>
           <Row >
             { products.map( product => (
                 <>
                 <Col className="container  mt-2 " key={product._id} sm={6} md={4} lg={3} xs={8}>
                    <Product key={product._id} product={product} history={history} match={match}/>
                 </Col>
                 </>
             ))
            }
          </Row>   
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
