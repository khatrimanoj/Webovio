import React from 'react';
import Header from './Components/Hearder';
import Home from './Components/Home';
import './App.css';
import './header.css'


function App() {
  var nav_item = {
      menu: ["Home", "Service", "Work", "Hire"]
  }
  return (
    <>
      <Header navItem={nav_item}/>
      <div className="wrapper">
        <Home />
      </div>
    </>
  );
}

export default App;
