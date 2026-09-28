import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar } from '../1-navbar/navbar';
import { Home } from '../2-home/home';
import { Portfolio } from '../3-portfolio/portfolio';
import { Skills } from '../4-skills/skills';
import { AboutMe } from '../5-about-me/aboutMe';
import { WorkWithMe } from '../6-work-with-me/workWithMe';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Portfolio />
    <Skills />
    <div className='about-work-group'>
      <AboutMe />
      <WorkWithMe />
    </div>
  </StrictMode>,
)
