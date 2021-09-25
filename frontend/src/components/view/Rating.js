


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
                     {value >= index + 1 ? <StarIcon fontSize="small" style={{color:yellow[500]}} /> : 
                     value >= index + 0.5 ? <StarHalfIcon fontSize="small" style={{color:yellow[500]}}/>  
                     : <StarOutlineIcon fontSize="small" style={{color:yellow[500]}}/>}
                     </span>        )) }
           <small> {text && text} </small>
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
