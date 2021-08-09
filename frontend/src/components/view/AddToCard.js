import {Card,Button,Row,Col} from 'react-bootstrap'
import {FiPlus,FiMinus} from 'react-icons/fi'
const AddToCard = ({quantity,price}) => {
    return (
        <>
          <Card style={{display:"flex",justifyContent:"center", width: '90vh',background:"blue"}}>
          <Card.Body> 
            <Row className="bg-danger">
            <Col >
             <Card.Title>Select quantity</Card.Title>
            </Col>
            <Col  >
            <strong className="fs-3 mx-5">${price}</strong> 
            </Col>
          </Row>
          <Card.Text>
          <Row className="bg-info" >
            <Col>
            <FiMinus type="button" />
            </Col>
              <Col >  
          
          <span className="fs-4 mx-4">{quantity}</span> 
            
            </Col>
            <Col>
            <FiPlus type="button"/>
            </Col>
            <Col >
            <Button size="lg" className="px-5" variant="primary">Add to Cart</Button>
            </Col>
          </Row>
    </Card.Text>
   
          </Card.Body>
          
         </Card>  
        </>
    )
}

export default AddToCard
