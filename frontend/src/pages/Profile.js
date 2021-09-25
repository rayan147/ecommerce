import {useEffect,lazy,useReducer} from 'react'


import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaTimes }from 'react-icons/fa'
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';


import getUserDetails from '../actions/user/getUserDetails'
import getUserOrderList from '../actions/order/getUserOrderList'
import updateUserProfile from '../actions/user/updateUserProfile'
import initialState from '../store/internalState/internalRegisterState'
import profileReducer from '../reducers/internal/registerReducer'
import INTERNAL_STATE from '../constants/internalState'
import { USER_CONSTANTS} from '../constants/userConstants'

const { USER_UPDATE_PROFILE_RESTORE_REQUEST } = USER_CONSTANTS

// // LOADS WHEN REQUESTED
// const  Alert = lazy(() =>  import('../components/view/Alert'))

const {NAME,EMAIL,ERROR_Alert,PASSWORD,CONFIRM_PASSWORD} = INTERNAL_STATE
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  subTotalItem: {
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
      marginTop: '3.3rem',
      
  },
  table: {
    minWidth: 650,
  },
}));

const Profile = ({location,history}) => {

  const classes = useStyles();

    const [state, dispatchUseReducer] = useReducer(profileReducer, initialState)
    const {name,email,password,confirmPassword,errorAlert} = state

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const {user} = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdatedProfile = useSelector(state => state.userUpdatedProfile)
    const {success,error} =  userUpdatedProfile

    const getUserListOrder = useSelector(state => state.getUserListOrder)
    const {isLoasding :loadingOrders,error: errorOrders,myOrders} = getUserListOrder
    
   


   useEffect(() => {
     if(!userInfo){
        history.push('/')
     }
    },[userInfo,history])

    useEffect(() => {
       if(!user || !user.name ||success){ 
            dispatch({type:USER_UPDATE_PROFILE_RESTORE_REQUEST})
            dispatch(getUserDetails('profile'))
            dispatch(getUserOrderList())
           return
        } 
      },[user,success,dispatch,getUserListOrder])
     
      
   useEffect(() => {
       if(user && user.name && success){
       dispatchUseReducer({type:EMAIL,payload:user.email})
       dispatchUseReducer({type:NAME,payload:user.name})
       }
       return
       
    },[dispatchUseReducer,dispatch,userInfo,history,user,success])
     
   
    
    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            dispatchUseReducer({
              type:ERROR_Alert,
              errorAlert:'Passwords do not match'
            })
          return
        }
        const updatedUserDetails ={
          user_id:user._id,
          name:state.name,
          email:state.email,
          password:state.password
        }
        // console.log({updatedUserDetails})
        // DISPATCH UPDATES PROFILE
        dispatch(updateUserProfile(updatedUserDetails))
    }



    return (
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      <Grid container spacing={3}>
      <Grid  item lg={3}>
            <Typography 
          component="div" 
          variant="h5" 
          className={classes.title}
          
          color="textSecondary">User Profile</Typography>
         
      {errorAlert && <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
        {errorAlert}
        </Alert>}
 
      
      {success && <Alert severity='success'>
      <AlertTitle>Success</AlertTitle>
        Updated Details
        </Alert>}
      {error && <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
        {error}
        </Alert>}
     
      <form onSubmit={submitHandler} noValidate autoComplete="off">
       
          <TextField  
            label="Name"
            type='text'
            fullWidth
            id="name"
            name="name"
            autoComplete="name"
            autoFocus
            placeholder={user.name}
            value={name}
            required
            onChange={(e) => dispatchUseReducer({type:NAME,payload:e.target.value})}
          />
           <TextField  
            label="Email"
            type='text'
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder={user.email}
            value={email}
            required
            onChange={(e) => dispatchUseReducer({type:EMAIL,payload:e.target.value})}
          />
        <TextField
        label="Password"
        type='password'
        fullWidth
        id="password"
        name="password"
        autoComplete="current-password"
        autoFocus
        placeholder={user.password}
        value={password}
        required
        onChange={(e) => dispatchUseReducer({type:PASSWORD,payload:e.target.value})}
      />

    <TextField
      label="Confirm Password"
      type='password'
      fullWidth
      id="confirmPassword"
      name="confirmPassword"
      autoComplete="current-password"
      autoFocus
      placeholder={user.password}
      value={confirmPassword}
      required
      onChange={(e) => dispatchUseReducer({type:CONFIRM_PASSWORD,payload:e.target.value})}
    />

     <Button type="submit" variant="contained" color="primary" fullWidth style={{marginTop:'.5rem'}}>
        Update Profile
      </Button>
      </form>
      </Grid>
      <Grid item lg={9}>
      <Typography 
          component="div" 
          variant="h3" 
          className={classes.title}
          color="textSecondary">My Orders</Typography>
        {loadingOrders ? (
          <div>Loading...</div>
        ) : errorOrders ? (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            {errorOrders}
            </Alert>
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="order's table">
            <TableHead>
             <TableRow>
          
                <TableCell >ID</TableCell>
                <TableCell align="right">DATE</TableCell>
                <TableCell align="right">TOTAL</TableCell>
                <TableCell align="right">PAID</TableCell>
                <TableCell align="right">DELIVERED</TableCell>
                <TableCell align="right">MORE INFO</TableCell>
                </TableRow>
                 </TableHead>
                 <TableBody>
              {myOrders?.map((order) => (
                <TableRow key={order._id}>
                  <TableCell component="th" scope="row">{order._id}</TableCell>
                  <TableCell align="right">{order.createdAt.substring(0, 10)}</TableCell>
                  <TableCell align="right">{order.totalPrice}</TableCell>
                  <TableCell align="right">
                 
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <ClearIcon style={{ color: 'red' }}></ClearIcon>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <ClearIcon style={{ color: 'red' }}></ClearIcon>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`/order/${order._id}`}>
                      <Button variant='inherit'>
                        Details
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
            </TableContainer>
        )}
      </Grid>
     
     </Grid>
      </Grid>
      </Grid>
    )
    }

export default Profile