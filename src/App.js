// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Teextform';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

const [mode,newmode]=useState('light');
const [alert,setalert]=useState(null);

let toggelmode=()=>{
  if(mode==='dark'){
    newmode('light');
    document.body.style.backgroundColor="white";
    showalert("light mode has been enabled","success");
  }
  else{
    newmode('dark');
    document.body.style.backgroundColor="#00112a";
    showalert("dark mode has been enabled!","success");
  }
}


const showalert=(messege,type)=>{
  setalert({
    msg:messege,
    type:type
  })

  setTimeout(() => {
    setalert(null);
  }, 2000);
}
  return (
   <>

<Navbar title="navigation bar" mode={mode} toggelmode={toggelmode} />
    <Alert alert={alert}/>


<div className="container">
  <Routes>
  <Route exact path="/about" element={<About mode={mode}/>}/>
  <Route exact path="/" element={<Textform mode={mode} showalert={showalert}/>}/>
  </Routes>
 </div>
  
    
  
   </>
  );
}

export default App;
