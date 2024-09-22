import React from 'react'
import "./skills.css"
const Skills = () => {
  return (
    <section id ='skills'>
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-item">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skills-item">
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <p>CSS3</p>
          </div>
          </div>
    </section>
  )
}

export default Skills
