import React from "react"; 
import { FaAddressBook } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import logo from'../logo.png'
import "./Footer.css";

export default function Footer() {
  return (
    <div class="footer">
        <div class="col-1">
            <h3>USEFUL LINKS</h3>
            <a href="#home">Home</a>
            <a href="#home">About</a>
            <a href="Contact.js">ContactUs</a>
        </div>
        <div class="col-3">
    <FaAddressBook/><h3>Contact</h3>
            <p>#6-174, Plot no.304,, OU Colony, Narapally Chowdaryguda </p>
                    <p>Hyderabad Telengana- India-500088</p>
                    <FaEnvelope/><h3>Email</h3>
                    <p>aviitservices@gmail.com</p>
        </div>
        <div class="col-2">
             <img src={logo}  alt="logo"></img>  
        </div>
    </div>
  );
}