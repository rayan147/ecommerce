import {useEffect,lazy,useReducer} from 'react'


import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col,Table} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {FaTimes }from 'react-icons/fa'

import getUserDetails from '../actions/user/getUserDetails'
import getUserOrderList from '../actions/order/getUserOrderList'
import updateUserProfile from '../actions/user/updateUserProfile'
import initialState from '../store/internalState/internalRegisterState'
import profileReducer from '../reducers/internal/registerReducer'
import INTERNAL_STATE from '../constants/internalState'
import { USER_CONSTANTS} from '../constants/userConstants'

const { USER_UPDATE_PROFILE_RESTORE_REQUEST } = USER_CONSTANTS

// LOADS WHEN REQUESTED
const  Message = lazy(() =>  import('../components/view/Message'))

const {NAME,EMAIL,ERROR_MESSAGE,PASSWORD,CONFIRM_PASSWORD} = INTERNAL_STATE

const Profile = ({location,history}) => {
    const [state, dispatchUseReducer] = useReducer(profileReducer, initialState)
    const {name,email,password,confirmPassword,errorMessage} = state

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
              type:ERROR_MESSAGE,
              errorMessage:'Passwords do not match'
            })
          return
        }
        const updatedUserDetails ={
          user_id:user._id,
          name:state.name,
          email:state.email,
          password:state.password
        }
        console.log({updatedUserDetails})
        // DISPATCH UPDATES PROFILE
        dispatch(updateUserProfile(updatedUserDetails))
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
           className="border-0"
            type='name'
            placeholder={user.name}
            value={name}
            onChange={(e) => dispatchUseReducer({type:NAME,payload:e.target.value})}
          ></Form.Control>
         
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
          className="border-0"
            type='email'
            placeholder={user.email}
            value={email}
            onChange={(e) => dispatchUseReducer({type:EMAIL,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
          className="border-0"
            type='password'
            placeholder='*********'
            value={password}
            onChange={(e) => dispatchUseReducer({type:PASSWORD,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          className="border-0"
            type='password'
            placeholder='*********'
            value={confirmPassword}
            onChange={(e) => dispatchUseReducer({type:CONFIRM_PASSWORD,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Button type='submit'className="btn btn-primary btn-block w-100 rounded my-2">
          update profile
        </Button>
      </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <div>Loading...</div>
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myOrders?.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }}></FaTimes>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes style={{ color: 'red' }}></FaTimes>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm rounded' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col> 
        </Row>
    )
    }

export default Profile