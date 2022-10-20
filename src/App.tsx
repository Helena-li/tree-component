import React from 'react';
import logo from './logo.svg';
import './App.css';
import FamilyTree from './Components/FamilyTreeComponent/Index'; 

function App() {
  return (
    <div className="App">
      <div>
        <p>
          Family Tree
        </p>
      </div>
        
      <FamilyTree />
    </div>
  );
}

export default App;
