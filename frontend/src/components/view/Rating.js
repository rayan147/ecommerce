import {memo} from 'react'


import PropTypes from 'prop-types'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import yellow from '@material-ui/core/colors/yellow';






const Rating = ({value,text,color}) => {
    return (
        <>
        { [...Array(5)].map((_,index) => (         
                 <span key={index}>
                     {value >= index + 1 ? <StarIcon style={{color:yellow[500]}} /> : 
                     value >= index + 0.5 ? <StarHalfIcon style={{color:yellow[500]}}/>  
                     : <StarOutlineIcon style={{color:yellow[500]}}/>}
                     </span>        )) }
           <span> {text && text} </span>
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
