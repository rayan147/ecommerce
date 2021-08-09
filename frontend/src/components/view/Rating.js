import {memo} from 'react'
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"
import {Row,Col} from 'react-bootstrap'
import PropTypes from 'prop-types'


const Rating = ({value,text,color}) => {
    return (
        <>
         <Row>
             <Col md={6}>
                
                  <strong className='fs-3'>{value}</strong >
                  <BsStarFill style={{marginBottom:'1rem',marginRight:'.2rem'}} color={color} size='2rem' />
                   <span > ({text && text}) </span>
                   </Col>

         </Row>
        { [1, 2, 3, 4, 5].map(index => (         
                 <span key={index}>
                     {value >= index ? <BsStarFill color={color} /> : 
                     value >=  0.5 ? <BsStarHalf color={color}/>  
                     : <BsStar color={color}/>}
                     </span>        )) }
           <span> ({text && text}) </span>
        </>
    )
}

Rating.defaultProps = {
    color : '#f8e824',
    value : 0,
}
Rating.propTypes = {
    value : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
    color : PropTypes.string
}
export default Rating
