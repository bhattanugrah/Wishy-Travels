import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Login, Signup } from "../../features";
import { setSignUpModalShow, selectSignUpModalShow, selectModalShow, setModalShow } from "../store";
import { useDispatch, useSelector } from 'react-redux'

const Header = () =>{

    const dispatch = useDispatch();


    const loginModalShow = useSelector(selectModalShow);
    const signUpModalShow = useSelector(selectSignUpModalShow);

    const toggle = () =>{
        var elem = document.querySelector(".home");
        elem.classList.toggle("dark")
    }

    const loginModal = (value) =>{
        dispatch(setModalShow(value))
    }

    const signUpModal = (value) =>{
        dispatch(setSignUpModalShow(value))
    }
    return(
        <Navbar collapseOnSelect className="nav-bar" expand="lg" variant="dark" fixed="top">
            <Container >   
                <Navbar.Toggle className="toggler" onClick={toggle} color="white" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center main-menu">
                    <Nav.Link className="nav-link"  href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#about-page">About</Nav.Link>
                    <Nav.Link className="nav-link" href="#link">Contact</Nav.Link>
                    <Nav.Link className="nav-link" onClick={() => signUpModal(true)}>SignUp</Nav.Link>
                    <Nav.Link className="nav-link" onClick={() => loginModal(true)}>Login</Nav.Link>
                </Navbar.Collapse>
            </Container>

            <Login
                show={loginModalShow}
                onHide={() => loginModal(false)}
            />
            <Signup
                show={signUpModalShow}
                onHide={() => signUpModal(false)}
            />
        </Navbar>
    )
}

export default Header