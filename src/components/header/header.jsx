import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink } from 'react-router-dom'
import './bar.scss'


const Header =() => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
        <NavLink to ='/' className='navbar-brand'>React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to ='/' className='nav-link'>Home</NavLink>
            <NavLink to ='/user' className='nav-link'>User</NavLink>
            <NavLink to ='/admin' className='nav-link'>Admin</NavLink>
            <NavLink to ='/music' className='nav-link'>Music</NavLink>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href='/user'>User</Nav.Link> */}
          </Nav>
          <Nav>
            <button className='btn-login'>Log in</button>
            <button className='btn-signup'>Sign up</button>
            {/* <NavDropdown title="setting" id="basic-nav-dropdown">
              <NavDropdown.Item >Log in</NavDropdown.Item>
              <NavDropdown.Item >log out </NavDropdown.Item>
              <Link to='/mycomponent' className='dropdown-item'>mycomponent</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              profile
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header