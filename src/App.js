import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

const App = () => {
  const [resumeData, setResumeData] = useState({})


  useEffect(() => {
    fetch('/resumeData.json').then(resp => resp.json()).then(resp => setResumeData(resp))
    
  }, [])



  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
     { resumeData.main&&<Contact data={resumeData.main} />}
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
