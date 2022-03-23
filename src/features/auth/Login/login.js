import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Signup } from "../..";



export const Login = (props) =>{

    const [signUpModalShow, setSignUpModalShow] = React.useState(false);

    return(
         <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="login-modal"
        >
            <Modal.Body>
                <span className="close-button" onClick={props.onHide}><FontAwesomeIcon icon={faTimes} size="xl" /></span>
                <p className="title">LOGIN</p>
                <div className="icons">
                    <FontAwesomeIcon icon={faGoogle} size="lg" className="google px-2"/>
                    <FontAwesomeIcon icon={faFacebook} size="lg" className="facebook px-2"/>
                </div>
                <p className="mt-5">
                    <Form className="login-form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="forgot-password">Forgot Password?</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className="d-flex mx-auto" variant="outline-secondary" >
                            Submit
                        </Button>
                    </Form>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className="login-footer">
                    <p>
                        Not a member? <span className="underline" onClick={() => setSignUpModalShow(true)}>Sign up now</span>
                    </p>
                </div>
            </Modal.Footer>
            <Signup show={signUpModalShow}
            onHide={() => setSignUpModalShow(false)}
            />
        </Modal>
    )
}