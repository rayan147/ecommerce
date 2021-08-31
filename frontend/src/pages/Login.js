import {useEffect,useState,lazy} from 'react'
import { renderToStaticMarkup } from "react-dom/server";

import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col,Card,Container} from 'react-bootstrap'


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
    const {isLoading,error,userInfo} = userLogin

    const redirect =location?.search?.split('=')[1] ??  '/'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
        },[redirect,history,userInfo])
    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(login(email,password))
    }
//    const svgString = encodeURIComponent(renderToStaticMarkup(<LoginCoverBg/>))
//    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    return (
      <FormContainer className="h-100 d-flex justify-content-center align-items-center">
      <Card classNameName="shadow-lg p-3 mx-5  rounded" style={{ width: '23rem' }}>
            <Card.Header className="text-center fs-2 text-uppercase">
                <h3 classNameName="">Login</h3>
            </Card.Header>
            <Card.Body>
        
            {error && <Message variant="danger">{error}</Message>}
            {error === null &&  isLoading &&  <Message variant="info">Loging in...</Message>}
           <Form onSubmit={submitHandler}> 
               <Form.Group controlId='email' className="m-3 border-rouned">
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}>
                   </Form.Control>
               </Form.Group>
               <Form.Group controlId='password' className="m-3 border ">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}>        
                   </Form.Control>
                   <div classNameName="d-flex justify-content-center align-items-center">
<Button classNameName='btn w-100 my-2 rounded ' type='submit' variant='primary'>Login</Button>
                   </div>
                   
                   <Row >
                        <Col  xs={12}>
                            <Link to={redirect ? `/register?=redirect=${redirect}` : '/register'}>
                              <p>New Customer? Register</p> 
                            </Link>
                        </Col>
                    </Row>
                   
               </Form.Group>
               
           </Form>
    </Card.Body>
    </Card> 
    </FormContainer>
   
          
    )
}


export default Login
