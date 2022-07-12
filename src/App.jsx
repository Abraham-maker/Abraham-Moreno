import { useState } from 'react';
import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/stack/Skill';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import './App.css'


function App() {
  return (
    <>
      {/* <Contact /> */}
      <NavBar />
      <Header />
      <About />
      <Skill />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
