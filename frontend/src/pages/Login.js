import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from '../components/view/FormContainer'
import login from '../actions/user/login'
import  Message from '../components/view/Message'

const Login = ({location,history}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {isLoading,error,userInfo,isAuthenticated} = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    // useEffect(() => {
    //     if(userInfo !== null ?? userInfo !== undefined){
    //         history.push(redirect)
    //     }
    //     },[redirect,history,userInfo])
    const submitHandler = (e) => {
        e.preventDefault()
        try {
            dispatch(login(email,password))
        } catch (e) {
            console.error(e.message)
        }
        
    }
  console.log('Error',error)
  console.log('UserInfo',userInfo)
    return (
        <FormContainer>
           <h2>Sign</h2>
            {error && <Message variant="danger">{error}</Message>}
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
                   <p>New Customer? Register</p>
               </Form.Group>
               
           </Form>
        </FormContainer>
    )
}

export default Login
