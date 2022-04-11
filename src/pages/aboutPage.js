import React from "react";

const About = () =>{

    return(
        <section id="about-page">
            <div className="banner">
            </div>
            <div className="content-container">
                <div className="row  justify-content-evenly" style={{margin: 'auto'}}>
                    <div className="title col-md-3">
                        <h1 className="mb-5  main-title">
                            About Us
                        </h1>
                    </div>
                    <div className="about-content col-md-6">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About