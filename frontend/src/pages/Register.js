import {useEffect,useState,lazy} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from '../components/view/FormContainer'
import register from '../actions/user/register'


const  Message = lazy(() => {
    return Promise.all([
      import('../components/view/Message'),
      new Promise(resolve => setTimeout(resolve, 5000))
    ])
    .then(([moduleExports]) => moduleExports);
  });
const Register = ({location,history}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const {isRegistering,error,userInfo} = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
        },[redirect,history,userInfo])
    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(register(email,password,name))
    }

    return (
        <FormContainer>
           <h2>Register</h2>
            {error && <Message variant="danger">{error}</Message>}
            {error === null &&  isRegistering &&  <Message variant="info">Registering...</Message>}
           <Form onSubmit={submitHandler}> 
               <Form.Group controlId='p'>
                   <Form.Label>Name</Form.Label>
                   <Form.Control type="name" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}>
                   </Form.Control>
               </Form.Group>
               <Form.Group controlId='p'>
                   <Form.Label>Email</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}>
                   </Form.Control>
               </Form.Group>
               <Form.Group>
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}>        
                   </Form.Control>
                   <Button className='btn w-100 mt-1' type='submit' variant='primary'>Register</Button>
                   <p>Already have an account? Log In</p>
               </Form.Group>
               
           </Form>
        </FormContainer>
    )
}

export default Register
