import {useEffect,lazy,useReducer} from 'react'


import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col} from 'react-bootstrap'


import FormContainer from '../components/view/FormContainer'
import register from '../actions/user/register'
import initialState from '../store/internalState/internalRegisterState'
import reducer from '../reducers/internal/registerReducer'
import INTERNAL_STATE from '../constants/internalState'

// LOADS WHEN REQUESTED
const  Message = lazy(() =>  import('../components/view/Message'))

const {NAME,EMAIL,ERROR_MESSAGE,PASSWORD,CONFIRM_PASSWORD} = INTERNAL_STATE

const Register = ({location,history}) => {
    const [state, dispatchUseReducer] = useReducer(reducer, initialState)
    const {name,email,password,confirmPassword,errorMessage} = state

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const {isRegistering,error,userInfo} = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'
   
    useEffect(() => {
        if(userInfo && userInfo._id){
            history.push(redirect)
        }
        },[redirect,history,userInfo])
    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            dispatchUseReducer({
              type:ERROR_MESSAGE,
              errorMessage:'Passwords do not match'
            })
            return
        }
            dispatch(register(name, email, password ))
    }

  

    return (
        <FormContainer>
      <h1>Sign Up</h1>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {isRegistering && <Message variant='info'>Registering ...</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => dispatchUseReducer({type:NAME,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={state.email}
            onChange={(e) => dispatchUseReducer({type:EMAIL,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => dispatchUseReducer({type:PASSWORD,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => dispatchUseReducer({type:CONFIRM_PASSWORD,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
    )
}

export default Register
