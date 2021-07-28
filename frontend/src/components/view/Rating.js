import React from 'react'
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"

import PropTypes from 'prop-types'


const Rating = ({value,text,color}) => {
    return (
        <div className="rating">
           <span>
               {value >= 1 ? <BsStarFill  color={color}/> : value >= 0.5 ? <BsStarHalf color={color}/> : <BsStar color={color}/>}
            </span> 
           <span>
               {value >= 2 ? <BsStarFill color={color} /> : value >= 1.5 ? <BsStarHalf color={color}/> : <BsStar color={color}/>}
            </span> 
           <span>
               {value >= 3 ? <BsStarFill color={color} /> : value >= 2.5 ? <BsStarHalf color={color}/> : <BsStar color={color} />}
            </span> 
           <span>
               {value >= 4 ? <BsStarFill color={color} /> : value >= 3.5 ? <BsStarHalf color={color}/> : <BsStar color={color}/>}
            </span> 
           <span>
               {value >= 5 ? <BsStarFill color={color} /> : value >= 4.5 ? <BsStarHalf color={color}/> : <BsStar color={color}/>}
            </span> 
           <span> {text && text} </span>
        </div>
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
