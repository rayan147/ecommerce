import {useEffect,lazy,useReducer} from 'react'


import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col,Spinner} from 'react-bootstrap'



import getUserDetails from '../actions/user/getUserDetails'
import updateUserProfile from '../actions/user/updateUserProfile'
import initialState from '../store/internalState/internalRegisterState'
import profileReducer from '../reducers/internal/registerReducer'
import INTERNAL_STATE from '../constants/internalState'
import { USER_CONSTANTS} from '../constants/userContants'

const { USER_UPDATE_PROFILE_RESTORE_REQUEST } = USER_CONSTANTS

// LOADS WHEN REQUESTED
const  Message = lazy(() =>  import('../components/view/Message'))

const {NAME,EMAIL,ERROR_MESSAGE,PASSWORD,CONFIRM_PASSWORD} = INTERNAL_STATE

const Profile = ({location,history}) => {
    const [state, dispatchUseReducer] = useReducer(profileReducer, initialState)
    const {name,email,password,confirmPassword,errorMessage} = state

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const {isLoading,user} = userDetails
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const userUpdatedProfile = useSelector(state => state.userUpdatedProfile)
    const {success,error} =  userUpdatedProfile
    
   useEffect(() => {
        if(!userInfo){
           history.push('/login')
           return
        }
        if(!user || !user.name ||success){ 
            dispatch({type:USER_UPDATE_PROFILE_RESTORE_REQUEST})
            dispatch(getUserDetails('profile'))
           return
        } 
       dispatchUseReducer({type:EMAIL,payload:user.email})
       dispatchUseReducer({type:NAME,payload:user.name})
      
       
    },[dispatchUseReducer,dispatch,userInfo,history,user,success])



    
    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            dispatchUseReducer({
              type:ERROR_MESSAGE,
              errorMessage:'Passwords do not match'
            })
          return
        }
        const updatedUserDetail ={
          user_id:user._id,
          name:state.name,
          email:state.email,
          password:state.password
        }
        console.log({updatedUserDetail})
        // DISPATCH UPDATES PROFILE
        dispatch(updateUserProfile(updatedUserDetail))
    }



    return (
        <Row>
            <Col md={3}><h1>User Profile</h1>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {}
      
      {success && <Message variant='success'>Updated Details</Message>}
      {error && <Message variant='danger'>{error}</Message>}
     
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder={name}
            value={name}
            onChange={(e) => dispatchUseReducer({type:NAME,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder={email}
            value={email}
            onChange={(e) => dispatchUseReducer({type:EMAIL,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='xxxxxx'
            value={password}
            onChange={(e) => dispatchUseReducer({type:PASSWORD,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='xxxxxx'
            value={confirmPassword}
            onChange={(e) => dispatchUseReducer({type:CONFIRM_PASSWORD,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          update profile
        </Button>
      </Form>
      </Col>
            
        </Row>
    )
    }

export default Profile