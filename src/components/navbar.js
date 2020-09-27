import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import logo from '../assets/tennis-ball.png';
import classes from './navbar.module.css';
import Scroll from 'react-scroll';
const Link = Scroll.Link;


class NavBarC extends Component {
    render(){
        return(
            <div>
<Navbar className="fixed-top" collapseOnSelect expand="lg" style = {{backgroundColor:'#485671'}} variant="dark">

{/**
 *    <Navbar.Brand href="#home">
      <img className={classes.logo}
                  src={logo}
                  width="170"
                  height="50"
                  alt="React Bootstrap logo"
                />

                  </Navbar.Brand>
 * 
 * 
 * 
 * 
 * 
 */}
  
  <Navbar.Brand href="#home">
      <img className={classes.logo}
                  src={logo}
                  width="50"
                  height="50"
                  alt="React Bootstrap logo"
                />

                  </Navbar.Brand>

   <Navbar.Brand href="#home" className={classes.title}>MobileStringer</Navbar.Brand>



  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

      <Nav.Link>
        <Link activeClass="" to="pricing" spy={true} smooth={true} duration={500} offset={-60}>Services & Pricing</Link>
      </Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link>
        <Link activeClass="" to="contact" spy={true} smooth={true} duration={500} offset={-60}>Contact Me</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
        )
    }
}

export default NavBarC;
