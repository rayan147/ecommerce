import { useEffect, useState,useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import login from "../actions/user/login";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
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
    maxHeight: 620,
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
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ location, history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { isLoading, error, userInfo } = userLogin;

  const redirect = location?.search?.split("=")[1] ?? "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [redirect, history, userInfo]);
  const submitHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }, [email, password, dispatch]);

  return (
    <Card className={classes.root} boxShadow={3}>
      <CardContent>
        {error && (
          <Alert severity='error'>
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        {error === null && isLoading && (
          <Alert severity='info'>
            <AlertTitle>Loging in...</AlertTitle>
          </Alert>
        )}

        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form onSubmit={submitHandler} className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href='/register' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href='/register' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </CardContent>
    </Card>
  );
};

export default Login;
