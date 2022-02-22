import React from "react";
import { Header } from "../layout";
import About from "./aboutPage";


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
        </>
    )
}

export default Home