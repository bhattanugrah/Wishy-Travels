import React from "react";
import { Header } from "../layout";
import About from "./aboutPage";
import { ToastContainer } from "react-toastify";
import {Row, Col, Card} from "react-bootstrap";
import Carousel from "react-elastic-carousel";


const Home = () =>{

    onscroll = () => {
        if(window.scrollY > 600){
            const navLink = document.querySelectorAll('.nav-link')
            navLink.forEach(element=>{
                element.classList.add("black");
            })
        }
        else if(window.scrollY < 750){
            const navLink = document.querySelectorAll('.nav-link')
            navLink.forEach(element=>{
                element.classList.remove("black");
            })
        }
    }

    return(
        <><Header />
        <div className="home" id="home">
            <div className="title-part container">
                <p className="main-title">
                    Wishy Travels
                </p>
                <p className="sub-title">
                    DON'T LISTEN TO WHAT THEY SAY, GO SEE
                </p>
            </div>
        </div>
        <About/>
        <section className="packages">
            <div className="packages-container container-fluid">
                <div className="title d-flex justify-content-center mb-5">
                    <h2>Our Best Selling Packages!</h2>
                </div>
                <div className="packages-carousel">
                    <Row xs={1} md={2} className="g-4 justify-content-center">
                        <Carousel itemsToShow={3}>
                            {Array.from({ length: 12}).map((_, idx) => (
                                <Col md={10}>
                                    <Card>
                                        <Card.Img variant="top" className="card-image" src="https://images.unsplash.com/photo-1611231832033-c3d79cbf2777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                        <Card.Body>
                                            <Card.Title>Kedarkantha</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Carousel>
                    </Row>
                </div>
            </div>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        </>
    )
}

export default Home