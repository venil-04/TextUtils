import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-dark `}>
    <div className={`container-fluid text-${props.mode==='light'?'dark':'light'}`}>
      <Link className="navbar-brand " to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about">About</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
         
          <li className="nav-item ">


<div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={props.toggelmode}/>
  <label className="custom-control-label" htmlFor="customSwitches">Enable dark Mode</label>
</div>

          {/* <input type="radio" id="customRadio1" name="customRadio" onClick={props.toggelmode} className="custom-control-input mx-2 my-2"/>
          <label className="custom-control-label" htmlFor="customRadioInline1">Enable {props.mode==='light'?'dark':'light'} Mode</label> */}
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
  )
}
