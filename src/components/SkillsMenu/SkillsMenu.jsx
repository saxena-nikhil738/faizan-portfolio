import React from 'react'
import "./SkillsMenu.css"
const SkillsMenu = () => {
  return (
    <div>
    <h5 id="Skills"className='heading'>Skills</h5>
    <div className='skills-div'>
                  <div className='tech-icon'>
                    <img  src='./src/assets/html.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/css-3.png' alt=""/>
                  </div>
                  <div className='tech-icon'>
                    <img  src='./src/assets/js.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/react.svg' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/redux.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/NextJS.png' alt=""/>
                  </div> 
    </div>
    <div className='skills-div'>
                  <div className='tech-icon'>
                    <img  src='./src/assets/node.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/express.png' alt=""/>
                  </div>
                  <div className='tech-icon'>
                    <img  src='./src/assets/SQL.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/wordpress.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/Elementor.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./src/assets/figma.png' alt=""/>
                  </div> 
    </div>
    
   </div>
  )
}

export default SkillsMenu