import React from 'react'
import "./contact.css"
import GitHub from "../../assets/github-logo.png"
import LinkedIn from "../../assets/linkedin-logo.png"
import Instagram from "../../assets/instagram-logo.png"
const Contact = () => {
  return (
    <section id='contact'>
        <div className='title'>
        Find Me On
        </div>
        <div className='container'>
        <div className='images'>
            <a href='https://github.com/arushigarhwal' target='_blank'rel="noopener noreferrer">
            <img src={GitHub} alt='GitHub Icon' />
            </a>
        </div>
        <div className='images'>
            <a href='https://www.linkedin.com/in/arushi-garhwal-151659262' target='_blank'rel="noopener noreferrer">
            <img src={LinkedIn} alt='LinkedIn Icon' />
            </a>
        </div>
        <div className='images'>
            <a href='https://www.instagram.com/arushi1023/' target='_blank'rel="noopener noreferrer">
            <img src={Instagram} alt='Instagram Icon' />
            </a>
        </div>
        </div>
    </section>
  )
}

export default Contact
