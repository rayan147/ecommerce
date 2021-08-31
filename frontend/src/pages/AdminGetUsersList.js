import React, { useEffect } from 'react'


import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineCheck,AiFillEdit} from 'react-icons/ai'
import {FaTimes }from 'react-icons/fa'
import {BiTrash} from 'react-icons/bi'

import Message from '../components/view/Message'
import listUsers from '../actions/admin/listUsers'
import deleteUser from '../actions/admin/deleteUser'

const AdminGetUsersList = ({ history }) => {
  const dispatch = useDispatch()

  const adminGetUsersList = useSelector((state) => state.adminGetUsersList)
  const { isLoading, error, users } = adminGetUsersList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const adminDeleteUser = useSelector((state) => state.adminDeleteUser)
  const { success: successDelete } = adminDeleteUser

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, successDelete,userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
        console.log(id)
      dispatch(deleteUser(id))
    }
  }
console.log(users)
  return (
    <>
      <h1>Users</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <AiOutlineCheck style={{ color: 'green' }}></AiOutlineCheck>
                  ) : (
                    <FaTimes style={{ color: 'red' }}></FaTimes>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <AiFillEdit ></AiFillEdit>
                    </Button>
                  </LinkContainer>
                  <BiTrash
                               type='button'
                               size="1.5rem"
                               color='red'
                               onClick={() => deleteHandler(user._id)}>
                                  
                             </BiTrash>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default AdminGetUsersList