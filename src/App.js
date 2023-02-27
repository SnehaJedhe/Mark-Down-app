import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  const [val,setVal]=useState("")
  return (
    <div className="App">
      <Header/>
      <Main val={val} setVal={setVal}/>
    </div>
  );
}

export default App;
