import React from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import SkillsMenu from './components/SkillsMenu/SkillsMenu';
const App =() => {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <div className='container'>
      <Hero />
      <Skills/>
      <WorkExperience/>
      <SkillsMenu />
      <ContactMe />
    </div>
    <Footer/>
    </BrowserRouter>
   
  )
}

export default App;