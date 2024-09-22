import React from 'react'
import './landing.css'
import {Link} from 'react-scroll'
import btnImg from "../../assets/handshake.png"

const Landing = () => {
  return (
    <section id = "intro">
        <div className="content">
            <span className='Hello'>Hello,</span>
            <span className='introText'>I'm Arushi<br />Web Developer</span>
            <p className='introPara'>I am a skilled Web Developer and a Machine Learning Enthusiast</p>
            <Link className='btn'><button className='hireMe'><img src={btnImg} alt="Hire Me Icon" />
            Hire Me </button> </Link>
        </div>
        
    </section>
  )
}

export default Landing
