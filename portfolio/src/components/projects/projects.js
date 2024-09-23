import React from 'react';
import "./projects.css";
import ECommerce from "../../assets/ECommerce.png";
import Portfolio from "../../assets/Portfolio.png"

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title">Projects</h2>
      <span className="description">
        "These projects aim to address real-world challenges through innovative solutions and modern technologies. They demonstrate a strong focus on functionality, efficiency, and user experience."
      </span>
      <div className="projectsContainer">
        <div className="project">
          <img src={ECommerce} alt="E-Commerce Shipping Prediction" className="work" />
          <div className="projectDetails">
            <h3>E-Commerce Shipping Prediction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus vel est ullamcorper feugiat. Sed non orci ac neque mollis gravida.</p>
          </div>
        </div>
        <div className="project">
          <img src={Portfolio} alt="Portfolio Website" className="work" />
          <div className="projectDetails">
            <h3>Portfolio Website</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus vel est ullamcorper feugiat. Sed non orci ac neque mollis gravida.</p>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Projects;
