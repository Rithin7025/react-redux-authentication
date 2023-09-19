import { Container, Nav, Navbar } from "react-bootstrap"
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'



 const Header = () => {
   return (
     <header>
      <Navbar bg ='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Mern Auth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="ms-auto">
              <Nav.Link href="/login">
                <FaSignInAlt />Sing In 
              </Nav.Link>
              <Nav.Link href="/login">
                <FaSignOutAlt />Sing Up 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
     </header>
   )
 }
 
 export default Header