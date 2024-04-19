import React from 'react'
import logo from '../assets/logotc.png'
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="container-fluid py-5">
      <hr style={{color: "var(--primary-color)"}}/>
  <div className="row">
    <div className="col-12 col-md">
    </div>
    <span className="navbar-brand d-flex justify-content-start px-3" to="/">
      <img src={logo} alt="logo" style={{height: "50px"}}/>
    </span>
     <div className="col-12 col-md">
      <br />
      
      <h1 className='fs-4' style={{textDecoration: "underline", color: "var(--background-color)"}}>Address:</h1>
      <p className='fw-bold' style={{textDecoration: "underline", color: "var(--background-color)"}}>
      No. 1670/49 6th Main Cross, Kengeri stage 2, Kengeri Satellite Town Bengaluru - 560060
      </p>
      <h1 className='fs-4'style={{textDecoration: "underline", color: "var(--background-color)"}}>Business Hours:</h1>
      <p className='fw-bold' style={{textDecoration: "underline", color: "var(--background-color)"}}>Monday - Friday: 9:00 AM - 5:00 PM (IST)</p>

      <a href='https://www.instagram.com/' className='px-2'  target='_blank' style={{color: "black"}}><PiInstagramLogoFill size={30}/></a>
    <a href='https://www.facebook.com/' className='px-2'  target='_blank' style={{color: "black"}}><BsFacebook size={30}/></a>
    <a href='https://www.pinterest.com/' className='px-2'  target='_blank' style={{color: "black"}}><BsPinterest size={30}/></a>
    <a href='https://www.twitter.com/' className='px-2'  target='_blank' style={{color: "black"}}><BsTwitterX size={30}/></a>
    <a href='https://www.linkedin.com/' className='px-2'  target='_blank' style={{color: "black"}}><AiFillLinkedin size={30}/></a>
      <h5 style={{color: "var(--primary-color)", marginTop: "1%"}}>2021, Tron's constructions© <span style={{color: "var(--primary-color)"}} className='fs-5'>All rights reserved.</span></h5>
    </div> 
  
  </div>
</footer>
  )
}

export default Footer