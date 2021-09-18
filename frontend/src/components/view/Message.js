
import {memo,useRef} from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

const Message = ({severity ,children}) => {
    //  const classes = useStyles()
  
    return (
        <Alert severity={severity} >
           {children}
        </Alert>
    )
}

// Message.propTypes = {
//     variant:PropTypes.string
// }
export default Message
