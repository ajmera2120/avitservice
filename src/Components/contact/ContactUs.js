import React from "react"; 
import { FaAddressBook } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import "./ContactUs.css";
import Fade from "react-reveal/Fade";


export default function ContactUs() {
  return (
    <section class="contact">
        <div class="contactcontent">
        <Fade bottom>
            <h2>Contact Us</h2>
            <p> AVI IT SERVICES</p>
            </Fade>
        </div>
    <div class="contactcontainer">
    <Fade left>
        <div class="contactinfo">
            <div class="box">
                <div class="text">
                <FaAddressBook />
                <h3>Address</h3>
                    <p>#6-174, Plot no.304,, OU Colony, Narapally Chowdaryguda </p>
                    <p>Hyderabad Telengana- India-500088</p>
                </div>
            </div>
        </div>
        <div class="contactinfo">
        <div class="box">
                <div class="text">
                <FaEnvelope />
                    <h3>Email</h3>
                    <p>aviitservices@gmail.com</p>
                </div>
            </div>
        </div>
        </Fade>
        </div>
        <div class="contactForm">
        <Fade right>
            <form>
                <h2>Send Message</h2>
                <div class="inputBox">
                <p>Enter your full name</p>
                    <input type="text" name="" required="required"/>
                    
                        <span>Full Name</span>
                </div>
                <div class="inputBox">
                <p>Enter your email address</p>
                    <input type="text" name="" required="required"/>
                    
                        <span>Email</span>
                </div>
                <div class="inputBox">
                <p>Enter your message</p>
                    <input type="text" name="" required="required"/>
                    
                        <span>Type your message...</span>
                </div>
                <div class="inputBox">
                    <input type="submit" name="" value="Send"/> 
                </div>
            </form>
            </Fade>
        </div>
    </section>
      
  );
}