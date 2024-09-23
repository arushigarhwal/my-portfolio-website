import React from 'react';
import "./projects.css";
import ECommerce from "../../assets/ECommerce.png";
import Portfolio from "../../assets/Portfolio.png"
import Footer from '../footer/footer';

const Projects = () => {
  return (
    <div>
    <section id="projects">
      <h2 className="titleProj">Projects</h2>
      <span className="description">
        "These projects aim to address real-world challenges through innovative solutions and modern technologies. They demonstrate a strong focus on functionality, efficiency, and user experience."
      </span>
      <div className="projectsContainer">
        <div className="project">
          <a href='https://github.com/arushigarhwal/Ecommerce-Shipping-Prediction' target='_blank' rel="noopener noreferrer">
          <img src={ECommerce} alt="E-Commerce Shipping Prediction" className="work" />
          <div className="projectDetails">
            <h3>E-Commerce Shipping Prediction</h3>
            <p>A machine learning solution for predicting e-commerce shipping delays, enhancing logistics efficiency and on-time delivery.</p>
          </div>
          </a>
        </div>
        <div className="project">
        <a href='https://github.com/arushigarhwal/my-portfolio-website' target='_blank' rel="noopener noreferrer">
          <img src={Portfolio} alt="Portfolio Website" className="work" />
          <div className="projectDetails">
            <h3>Portfolio Website</h3>
            <p>A creative portfolio built to highlight my journey, projects, and skills in tech and development.</p>
          </div>
          </a>
        </div>
    </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Projects;
