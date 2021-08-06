import {useEffect,useState,lazy} from 'react'

import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col} from 'react-bootstrap'


import FormContainer from '../components/view/FormContainer'
import login from '../actions/user/login'


const  Message = lazy(() => {
    return Promise.all([
      import('../components/view/Message'),
      new Promise(resolve => setTimeout(resolve, 5000))
    ])
    .then(([moduleExports]) => moduleExports);
  });
const Login = ({location,history}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {isLoading,error,userInfo,isAuthenticated} = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(isAuthenticated && redirect !== '/'){
            history.push(redirect)
        }
        },[redirect,history,isAuthenticated])
    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(login(email,password))
    }

    return (
        <FormContainer>
           <h2>Sign</h2>
            {error && <Message variant="danger">{error}</Message>}
            {error === null &&  isLoading &&  <Message variant="info">Loging in...</Message>}
           <Form onSubmit={submitHandler}> 
               <Form.Group controlId='p'>
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}>
                   </Form.Control>
               </Form.Group>
               <Form.Group>
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}>        
                   </Form.Control>
                   <Button className='btn w-100 mt-1' type='submit' variant='primary'>Login</Button>
                   <Row>
                        <Col xs={12}>
                            <Link to={redirect ? `/register?=redirect=${redirect}` : '/register'}>
                              <p>New Customer? Register</p> 
                            </Link>
                        </Col>
                    </Row>
                   
               </Form.Group>
               
           </Form>
        </FormContainer>
    )
}

export default Login
