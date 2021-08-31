import React, { useState, useEffect } from 'react'


import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/view/Message'
import Loader from '../components/view/Loader'
import FormContainer from '../components/view/FormContainer'
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

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {isLoading ? (
          <h1>loading....</h1>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default AdminEditUser