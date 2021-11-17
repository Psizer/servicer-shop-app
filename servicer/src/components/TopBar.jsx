import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import {logoutUser} from "../actions/userAction"
import {TiShoppingCart} from 'react-icons/ti'
import {SiHandshake} from 'react-icons/si'
const TopBar = () => {
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.cartReducer)
    const userState = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userState;
    console.log(currentUser) 
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg" style={{marginBottom:"20px"}}>
                <Container fluid>
                <Navbar.Brand><SiHandshake/> &nbsp; Servicer</Navbar.Brand> &nbsp;&nbsp;
                    <Nav className="me-auto">
                        <LinkContainer to="/" activeClassName>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" activeClassName>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" activeClassName>
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        {(currentUser) ? (
                                    <>
                                    <LinkContainer to="/">
                                        <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/order">Order</NavDropdown.Item>
                                            <NavDropdown.Item onClick={()=>{dispatch(logoutUser());}}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </LinkContainer>
                                    </>
                            )  : ( 
                                <>
                                {" "}
                                <LinkContainer to="/login">
                                  <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                  <Nav.Link>Register</Nav.Link>
                                </LinkContainer>{" "}
                                </>
                            )
                        }
                        
                        <LinkContainer to="/cart" activeClassName>
                            <Nav.Link>Cart&nbsp;[{ currentUser ?
                            cartState.cartItems.length : 0}]&nbsp;<TiShoppingCart/> </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TopBar;
