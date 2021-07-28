import React from 'react'
import {Navbar,Nav,Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {TiShoppingCart} from 'react-icons/ti'
import {FaUserAstronaut} from 'react-icons/fa'
const Header = () => {
    return (
 <header>
   <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
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
            <LinkContainer to="/login"> 
               <Nav.Link >
                 <FaUserAstronaut className="pb-1" size="1.5rem"/> 
                 Sign In
              </Nav.Link>         
             </LinkContainer>
        </Nav>
      </Navbar.Collapse>
   </Container>
 </Navbar>
</header>
    )
}

export default Header
