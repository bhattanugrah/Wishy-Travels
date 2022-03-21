import React from "react";
import { Header } from "../layout";
import About from "./aboutPage";
import { ToastContainer } from "react-toastify";


const Home = () =>{

    onscroll = () => {
        if(window.scrollY > 700){
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