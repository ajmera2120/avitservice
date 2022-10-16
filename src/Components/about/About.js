import React from "react"; 
import eye from '../eye.jpg';
import "./About.css";

export default function About() {
    return (
        <> <section class="about">
                <div class="aboutcontent">
                    <h2>About Us</h2>
                    <p> AVI IT SERVICES</p>
                </div>
            </section>
                    <div class="section-about">
                    <div class="about-container">
                        <div class="content-about">
                            <div class="abouttitle">
                                <h1>Know Us</h1>
                            </div>
                            <div class="section1content">
                                <p>Our firm remains on the cutting edge of recruitment trends. We stay well-informed and continually adapt to the ever-changing world of human resources.</p>
                                <p>Our consistent record of uncompromising ethics instills confidence and trust. Our consulting services focus on the client’s most critical issues and opportunities in the talent space.</p>
                                <p>We help companies manage their talent needs. We are a company that focuses on building talent ecosystem. We create, integrate and optimise the Talent Supply Chain for organisations.</p>
                            </div>
                        </div>
                            <div class="aboutimage">
                                <img src={eye} alt="img"/>
                            </div>
                    </div>
                    </div>
                    <div class="section2-about">
                    <div class="about2-container">
                            <div class="content2-about">
                                <div class="about2-title">
                                    <h1>Our Vision</h1>
                                </div>
                                <div class="section2content">
                                    <p>Our firm remains on the cutting edge of recruitment trends. We stay well-informed and continually adapt to the ever-changing world of human resources.</p>
                                    <p>Our consistent record of uncompromising ethics instills confidence and trust. Our consulting services focus on the client’s most critical issues and opportunities in the talent space.</p>
                                    <p>We help companies manage their talent needs. We are a company that focuses on building talent ecosystem. We create, integrate and optimise the Talent Supply Chain for organisations.</p>
                                </div>
                            </div>  
                        </div> 
                    </div> 
        </>
    );}

