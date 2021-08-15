import {Row,Col,Image,ListGroup,Button,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {BiTrash} from 'react-icons/bi'
const MapCart = ({cartItems,dispatch,addToCart,removeFromCartHandler}) => {
    return (
        <>
         <ListGroup > 
              {cartItems.map(item => (
                  <ol key={item.product_id}>
                      <Row>
                          <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded/>
                          </Col>
                          <Col md={3}>
                              <Link to={`/product/${item.product_id}`} style={{ textDecoration:'none'}}>{item.name} </Link>
                          </Col>
                          <Col md={2}>
                              Price: {item.price}
                          </Col>
                          <Col md={2}>
                             <Form.Control 
                                   as="select"
                                   value={item.quantity}
                                   onChange={(e)=>dispatch(addToCart(item.product_id,Number(e.target.value)))}
                                   >
                                     {
                                         [...Array(item.countInStock).keys()].map((i)=>{
                                             return <option key={i + 1} value={i + 1 }>{i + 1}</option>
                                            })
                                     }  
                             </Form.Control>
                          </Col>
                          <Col md={2}>
                              <Button 
                               type='button'
                               size='sm'
                               variant='danger'
                               onClick={() => removeFromCartHandler(item.product_id)}>
                                  <BiTrash/>
                             </Button>
                          </Col>
                      </Row> 
                </ol>
                
              ))}
        </ListGroup>   
        </>
    )
}

export default MapCart
