import React, { useState, useEffect } from 'react'


import { Link } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux'
import { Alert, AlertTitle } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import  adminGetUserDetails from '../actions/admin/adminGetUserDetails'
import adminUpdatedUser from "../actions/admin/adminUpdatedUser"
import ADMIN_CONSTANTS from '../constants/adminConstants'

const {ADMIN_USER_UPDATE_RESET} =ADMIN_CONSTANTS



const AdminEditUser = ({ match, history }) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const adminGetFromUser = useSelector((state) => state.adminGetFromUser)
  const { isLoading, error, user } = adminGetFromUser

  const adminUpdateUser = useSelector((state) => state.adminUpdateUser)
  const {
    isLoading: loadingUpdate,
    error: errorUpdate,
    isSuccess: successUpdate,
  } = adminUpdateUser

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ADMIN_USER_UPDATE_RESET })
      history.push('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(adminGetUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, history, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(adminUpdatedUser({ _id: userId, name, email, isAdmin }))
  }
  const handleChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  return (
    <>
    <Link to='/admin/userlist' style={{textDecoration:'none'}} >
        <Button>

        Go Back
        </Button>
      </Link>
    <Grid container  
    direction="column"
    justifyContent="center"
    alignItems="center">
      <Grid item >
      
      <Typography 
                      component="div" 
                      gutterBottom
                       variant="h5" >Edit User </Typography>
         </Grid>
        {loadingUpdate && <h2>loading....</h2>}
        {errorUpdate && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
          {errorUpdate}
          </Alert>}
        {isLoading ? (
          <h1>loading....</h1>
        ) : error ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
            </Alert>
        ) : (
          <Grid item >
          <form onSubmit={submitHandler}>
            <TextField
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
  
            <TextField
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
            <Checkbox
        checked={isAdmin}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
          

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </form>
         </Grid>
        )}

    </Grid>
    </>
  )
}

export default AdminEditUser