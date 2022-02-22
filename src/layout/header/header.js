import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Login, Signup } from "../../features";


const Header = () =>{

    const toggle = () =>{
        var elem = document.querySelector(".home");
        elem.classList.toggle("dark")
    }

    const [modalShow, setModalShow] = React.useState(false);
    const [signUpModalShow, setSignUpModalShow] = React.useState(false);


    return(
        <Navbar collapseOnSelect className="nav-bar" expand="lg" variant="dark" fixed="top">
            <Container >   
                <Navbar.Toggle className="toggler" onClick={toggle} color="white" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center main-menu">
                    <Nav.Link className="nav-link"  href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="#about-page">About</Nav.Link>
                    <Nav.Link className="nav-link" href="#link">Contact</Nav.Link>
                    <Nav.Link className="nav-link" onClick={() => setSignUpModalShow(true)}>SignUp</Nav.Link>
                    <Nav.Link className="nav-link" onClick={() => setModalShow(true)} >Login</Nav.Link>
                </Navbar.Collapse>
            </Container>

            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Signup
                show={signUpModalShow}
                onHide={() => setSignUpModalShow(false)}
            />
        </Navbar>
    )
}

export default Header