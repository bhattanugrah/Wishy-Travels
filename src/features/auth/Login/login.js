import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Signup } from "../..";
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { isEmail } from "../../../helper";
import { toast } from "react-toastify";
import { logUser, setLoading } from "../store";
import {setModalShow} from "../../../layout/store";




export const Login = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginModal = (value) =>{
        dispatch(setModalShow(value))
    }

    const [signUpModalShow, setSignUpModalShow] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const validated = !email || !password

    const resetData = () =>{
        setEmail("");
        setPassword("");
    }
    
    // useEffect(() => {
    //     console.log(user)
    // }, [dispatch, user])

    const data = {
        email,
        password
    }

    const handleSubmit = async () =>{
        if(!isEmail(email)){
            toast.error("Please enter a valid email")
            return false;
        }

        const requestOptions={
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }

        dispatch(setLoading(true));
        const apiResponse = await fetch('http://localhost:3000/api/users/login', requestOptions);
        if(!apiResponse.ok){
            apiResponse.json()
            .then(response =>{
                console.log(response)
            })
        }
        else{
            apiResponse.json()
            .then(response =>{
                console.log('Here:', response)
                dispatch(logUser(response));
                toast.success('User logged in succesfully!')
                loginModal(false);
                navigate("/");
                resetData();
            })
        }
    }





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
                            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Form.Text className="forgot-password">Forgot Password?</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className="d-flex mx-auto" variant="outline-secondary" onClick={handleSubmit}>
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