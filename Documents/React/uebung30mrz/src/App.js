import React from 'react';
import Name from './Name';
import Beschreibung from './Beschreibung';
import BestCodeLanguages from './CodeLanguagesList';
import './App.css';
import MobilList from './MobilList';


function App() {
  return (
    <div className="App">
      <Name />
      <Beschreibung />
      <BestCodeLanguages />
      <MobilList />
    </div>
  );
}

export default App;
