import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import SectionTwoColumns from './SectionTwoColumns';
import Description from './Description';
import Footer from './Footer';
import './myStyle.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <SectionTwoColumns />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
