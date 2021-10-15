



import { Alert} from '@material-ui/lab';



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
