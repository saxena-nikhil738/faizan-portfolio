import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
import { Link } from 'react-router-dom'
import Infocard from './Infocard'
const ContactMe = () => {
  return (
    <section  className='contact-container'>
        <h5 id="Contact Me" >Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconUrl={"./src/assets/email.png"}
                text="itsmefaizan4@gmail.com"
                />
                <Infocard
                 iconUrl={"./src/assets/linkedin.png"}
                />
                    
            </div>
            <div style={{flex: 1}}>
                <ContactForm></ContactForm>
            </div>
        </div>
    </section>
  )
}

export default ContactMe