import React from 'react'
import "./skills.css"
const Skills = () => {
  return (
    <section id ='skills'>
        <div className='titleSkills'>Skills</div>
        <div class="skill">
        <h2>Technical Skills</h2>
        <div class='skillHeader'>
            <p class='name'>Web Development</p>
            <p class='level'>(Advanced)</p>
            </div>
            <div class="bar">
            <div class="progress advanced"></div>
            </div>
        </div>
        <div class="skill">
        <div class='skillHeader'>
            <p class='name'>DataBase Management</p>
            <p class='level'>(Advanced)</p>
            </div>
            <div class="bar">
            <div class="progress advanced"></div>
            </div>
        </div>
        <div class="skill">
        <div class='skillHeader'>
            <p class='name'>Operating System</p>
            <p class='level'>(Average)</p>
            </div>
            <div class="bar">
            <div class="progress average"></div>
            </div>
        </div>
        <div class="skill">
        <div class='skillHeader'>
            <p class='name'>Machine Learning</p>
            <p class='level'>(Beginner)</p>
            </div>
            <div class="bar">
            <div class="progress beginner"></div>
            </div>
        </div>
        <div class="skill">            
            <div class='skillHeader'>
            <p class='name'>Data Structure and Algorithm</p>
            <p class='level'>(Regular)</p>
            </div>
            <div class="bar">
            <div class="progress regular"></div>
            </div>
        </div>
        <h2>Programming Languages</h2>
        <div class="skill">
        <div class='skillHeader'>
            <p class='name'>C</p>
            <p class='level'>(Average)</p>
            </div>      
            <div class="bar">
            <div class="progress average"></div>
            </div>
        </div>
        <div class="skill">
            <div class='skillHeader'>
            <p class='name'>C++</p>
            <p class='level'>(Advanced)</p>
            </div>
            <div class="bar">
            <div class="progress advanced"></div>
            </div>
        </div>
        <div class="skill">
        <div class='skillHeader'>
            <p class='name'>Python</p>
            <p class='level'>(Advanced)</p>
            </div>
            <div class="bar">
            <div class="progress advanced"></div>
            </div>
        </div>
        <div class="skill">
        <div class='skillHeader'>
            <p class='name'>Java</p>
            <p class='level'>(Regular)</p>
            </div>
            <div class="bar">
            <div class="progress regular"></div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills
