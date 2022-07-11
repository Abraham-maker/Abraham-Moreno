import { useState } from 'react';
import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from './components/stack/Skill';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import './App.css'

function App() {
  return (
    <>
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
