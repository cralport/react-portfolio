import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [categories] = useState(['About Me', 'Portfolio', 'Contact'])
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return(
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} />
      <main>
        {(currentCategory === 'About Me') ? <About />
        : (currentCategory === 'Portfolio') ? <Portfolio />
        : (currentCategory === 'Contact') ? <Contact />  
        : <About />}
      </main>
    </div>
  )
}


export default App;
