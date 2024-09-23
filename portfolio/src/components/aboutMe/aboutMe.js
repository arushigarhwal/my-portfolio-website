import React from 'react';
import Skills from '../skills/skills';
import codingImage from '../../assets/aboutMe-image.png'; 
import './aboutMe.css'
import Footer from '../footer/footer';
const AboutMe = () => {
  return (
    <div>
      <section id='aboutme'>
        <h2 className="titleAboutMe">Get to know me</h2>
        <div className='aboutContent'>
          <div className='text'>
           I'm a 3rd-year Computer Science and Engineering student at Vellore Institute of Technology,Chennai,passionate about leveraging technology to push boundaries. <br/>My expertise spans machine learning, artificial intelligence, full-stack development, and real-time system integration. I enjoy building dynamic solutions that merge creativity with functionality, whether it's developing intelligent systems or crafting seamless user experiences. <br/>
           Always eager to learn and innovate, I aim to use tech to solve real-world challenges and create impactful, cutting-edge applications.
          </div>
          <img src={codingImage} alt="Coding" className='codingImage' />
        </div>
      </section>
      <Skills />
      <Footer />
    </div>
  );
}

export default AboutMe;
