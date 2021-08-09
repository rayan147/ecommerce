import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {TiShoppingCart} from 'react-icons/ti'
import {FaUserAstronaut,FaUserNinja} from 'react-icons/fa'
import logout from  '../actions/user/logout'
const Header = () => {
  const dispatch = useDispatch()
  const {userInfo}  = useSelector(state => state.userLogin)

  const logOutHandler = () => {
    dispatch(logout())
  }
    return (
 <header>
   <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect>
     <Container>
       <LinkContainer to="/">
          <Navbar.Brand >Organic Produce </Navbar.Brand>
       </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto">
            <LinkContainer to="/cart">
               <Nav.Link > 
                 <TiShoppingCart className="pb-1" size="1.5rem"/> 
                   Cart
                </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              
              <NavDropdown title={userInfo.name} id='username' className="mx-1">
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
                 <FaUserAstronaut className="pb-1" size="1.5rem"/> 
                 Sign In
              </Nav.Link>         
             </LinkContainer> 
             <LinkContainer to="/register"> 
               <Nav.Link >
                 <FaUserNinja className="pb-1" size="1.5rem"/> 
                 Register
              </Nav.Link>         
             </LinkContainer> 
             </>
            )}
            
        </Nav>
      </Navbar.Collapse>
   </Container>
 </Navbar>
</header>
    )
}

export default Header
