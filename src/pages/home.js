import React, {useEffect, useState} from "react";
import { Header } from "../layout";
import About from "./aboutPage";
import { toast, ToastContainer } from "react-toastify";
import {Row, Col, Card} from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { Button } from "react-bootstrap";


const Home = () =>{

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
      ];
      
    
    const[packages, setPackages] = useState([]);

    useEffect(() => {
      const apiResponse = fetch('http://localhost:3000/packages');
      if(!apiResponse){
        toast.error('Cannot Obtain the list')
      }
      else{
        apiResponse.then((response) => response.json())
        .then((responseJSON) =>{
            setPackages(responseJSON)
        })
      }
    },[])
    



    onscroll = () => {
        if(window.scrollY > 600){
            const navLink = document.querySelectorAll('.nav-link')
            const navStyle = document.querySelector('.nav-bar')
            const logoBlack = document.querySelector('.black-logo')
            const logoWhite = document.querySelector('.white-logo')
            navStyle.classList.add("navigation-bar-style")
            logoWhite.classList.add("d-none")
            logoBlack.classList.remove("d-none")
            navLink.forEach(element=>{
                element.classList.add("black");
            })

        }
        else if(window.scrollY < 750){
            const navLink = document.querySelectorAll('.nav-link')
            const navStyle = document.querySelector('.nav-bar')
            const logoBlack = document.querySelector('.black-logo')
            const logoWhite = document.querySelector('.white-logo')
            logoWhite.classList.remove("d-none")
            logoBlack.classList.add("d-none")
            navStyle.classList.remove("navigation-bar-style");
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
                        <Carousel breakPoints={breakPoints} >
                            {packages.map((items) => (
                                <Col md={10}>
                                    <Card>
                                        <Card.Img variant="top" className="card-image" src="https://images.unsplash.com/photo-1611231832033-c3d79cbf2777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                        <Card.Body>
                                            <Card.Title>{items.name}</Card.Title>
                                            <Card.Text className="d-flex justify-content-between">
                                                ₹{items.price}
                                                <Button as="input" type="button" value="Explore" size="sm"/>
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