import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {

  return(
    <div>
      <Nav></Nav>
      <ContactForm></ContactForm>
      <About></About>
    </div>
  )
}


export default App;
