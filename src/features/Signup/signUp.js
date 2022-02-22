import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export const Signup = (props) =>{

    const days=[];
    for(var i=0; i<=31; i++){
        days.push(i);
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = [...Array(new Date().getFullYear() - 1989).keys()].map((e)=>e+1970)


    return(
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="sign-up-modal"
        >
            <Modal.Body>
                <span className="close-button" onClick={props.onHide}><FontAwesomeIcon icon={faTimes} size="xl" /></span>
                <p className="title">SignUp</p>
                <div className="icons">
                    <FontAwesomeIcon icon={faGoogle} size="lg" className="google px-2"/>
                    <FontAwesomeIcon icon={faFacebook} size="lg" className="facebook px-2"/>
                </div>
                <p className="mt-5">
                    <Form className="login-form">
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="First Name" />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Mobile number or email address"/>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="password" placeholder="New Password"/>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Date of Birth
                            </Form.Label>
                            <Row>
                                <Col>
                                    <Form.Select aria-label="Default select example">
                                    {days.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select aria-label="Default select example">
                                        {months.map((item) => (
                                            <option value={item}>{item}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select aria-label="Default select example">
                                        {years.map((item) => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </Form.Select>  
                                </Col>
                            </Row>                            
                        </Form.Group>
                        <Button className="d-flex mx-auto mt-5" variant="outline-secondary">
                            Sign Up
                        </Button>
                    </Form>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className="policy">
                    <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                </div>
            </Modal.Footer>
        </Modal>
    )
}