import {useEffect,useState,lazy} from 'react'
import { renderToStaticMarkup } from "react-dom/server";


import {useDispatch,useSelector} from 'react-redux'

import login from '../actions/user/login'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        maxHeight:620,
        margin:'auto',
        maxWidth:410,
        borderRadius:'10px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const  Message = lazy(() => {
    return Promise.all([
      import('../components/view/Message'),
      new Promise(resolve => setTimeout(resolve, 5000))
    ])
    .then(([moduleExports]) => moduleExports);
  });



const Login = ({location,history}) => {
    const classes = useStyles()
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

    return (
     
      <Card className={classes.root} boxShadow={3}>
            <CardContent>
    
            {error && <Message variant="danger">{error}</Message>}
            {error === null &&  isLoading &&  <Message variant="info">Loging in...</Message>}
           {/* <Form onSubmit={submitHandler}> 
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
               
           </Form> */}
             <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  onSubmit={submitHandler} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={email} 
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={password} 
            onChange={e => setPassword(e.target.value)}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </CardContent>
    </Card> 

   
          
    )
}


export default Login