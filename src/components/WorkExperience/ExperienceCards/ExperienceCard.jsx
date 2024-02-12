import React from 'react'
import "./ExperienceCard.css";
const ExperienceCard = ({ details}) => {
  
  const handleClick = () => {
    if (details.link) {
      // Open the link in a new tab/window
      window.open(details.link);
    }
  };
  
  return ( 
    <div  className='work-experience-card'>
        <h6> {details.title}</h6>
        <div className='work-duration'> {details.date}</div>

        <ul>
            {details.responsibilities.map((item) => (
                <li key={item}>{item}</li>
                
            ))}
        </ul>
        {details.link && (
          <button className= 'link-button' onClick={handleClick}>Link</button>
        )}
    </div>
  )
}

export default ExperienceCard