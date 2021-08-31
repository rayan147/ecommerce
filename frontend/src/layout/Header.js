import {useCallback} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {TiShoppingCart} from 'react-icons/ti'
import {FaUserAstronaut,FaUserNinja} from 'react-icons/fa'


import logout from  '../actions/user/logout'


const Header = () => {
  const dispatch = useDispatch()
  const {userInfo}  = useSelector(state => state.userLogin)

  const logOutHandler =useCallback (() => {
    dispatch(logout())
  },[dispatch])
    return (
 <header>
   <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
     <Container>
       <LinkContainer to="/">
          <Navbar.Brand >Organic Produce </Navbar.Brand>
       </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
              <LinkContainer to="/cart">
                 <Nav.Link > 
                 <TiShoppingCart className="pb-1" size="1.5rem"/> 
                   Cart
                </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              
              <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logOutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            ):(
              <>
             <LinkContainer to="/login"> 
               <Nav.Link >
               
                 Sign In
              </Nav.Link>         
             </LinkContainer> 
             <LinkContainer to="/register"> 
               <Nav.Link >
             
                 Register
              </Nav.Link>         
             </LinkContainer> 
             </>
            )}
            {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
        </Nav>
      </Navbar.Collapse>
   </Container>
 </Navbar>
</header>
    )
}

export default Header
