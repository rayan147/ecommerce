import { useEffect, useReducer } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import register from "../actions/user/register";
import initialState from "../store/internalState/internalRegisterState";
import reducer from "../reducers/internal/registerReducer";
import INTERNAL_STATE from "../constants/internalState";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { Alert, AlertTitle } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    maxHeight: 720,
    margin: "auto",
    maxWidth: 410,
    borderRadius: "10px",
    marginTop: theme.spacing(5),
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  account: {
    marginTop: ".2rem",
    marginBottom: ".4rem",
  },
}));

const { NAME, EMAIL, ERROR_MESSAGE, PASSWORD, CONFIRM_PASSWORD } =
  INTERNAL_STATE;

const Register = ({ location, history }) => {
  const classes = useStyles();
  const [state, dispatchUseReducer] = useReducer(reducer, initialState);
  const { name, email, password, confirmPassword, errorMessage } = state;

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { isRegistering, error, userInfo } = userRegister;

  const redirect = location?.search?.split("=")[1] ?? "/";

  useEffect(() => {
    if (userInfo && userInfo._id) {
      history.push(redirect);
    }
  }, [redirect, history, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatchUseReducer({
        type: ERROR_MESSAGE,
        errorMessage: "Passwords do not match",
      });
      return;
    }
    dispatch(register(name, email, password));
  };

  return (
    <>
      <Card className={classes.root} boxShadow={3}>
        <CardContent>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Register
              </Typography>
              {errorMessage && (
                <Alert severity='error'>
                  <AlertTitle>{errorMessage}</AlertTitle>
                </Alert>
              )}
              {error && (
                <Alert severity='error'>
                  <AlertTitle>{error}</AlertTitle>
                </Alert>
              )}
              {isRegistering && (
                <Alert severity='info'>
                  <AlertTitle>Registering ...</AlertTitle>
                </Alert>
              )}

              <form
                onSubmit={submitHandler}
                className={classes.form}
                noValidate
              >
                <TextField
                  variant='outlined'
                  margin='normal'
                  value={name}
                  onChange={(e) =>
                    dispatchUseReducer({ type: NAME, payload: e.target.value })
                  }
                  required
                  fullWidth
                  id='name'
                  label='Name'
                  name='name'
                  autoComplete='name'
                  autoFocus
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  value={state.email}
                  onChange={(e) =>
                    dispatchUseReducer({ type: EMAIL, payload: e.target.value })
                  }
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  value={password}
                  onChange={(e) =>
                    dispatchUseReducer({
                      type: PASSWORD,
                      payload: e.target.value,
                    })
                  }
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  value={confirmPassword}
                  onChange={(e) =>
                    dispatchUseReducer({
                      type: CONFIRM_PASSWORD,
                      payload: e.target.value,
                    })
                  }
                  required
                  fullWidth
                  name='confirmPassword'
                  label='confirmPassword'
                  type='password'
                  id='confirmPassword'
                  autoComplete='confirmPassword'
                />

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Register
                </Button>
                <span className={classes.account}>Have an Account? </span>
                <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                  Login
                </Link>
              </form>
              {/* 
      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row> */}
            </div>
          </Container>
        </CardContent>
        {/*      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </>
  );
};

export default Register;
