import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Nav(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-md fixed-top bg-${props.mode}`}>
  <div className="container-fluid text-dark">
    <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" alt="pic"className="nav" style={{width:'5rem',height:'4rem'}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-dark" id="navbarTogglerDemo01" >
      <ul className="navbar-nav me-auto mb-lg-0 text-dark" style={{marginLeft:'5%'}}>
        <li className="nav-item">
        <NavLink to="/" className={`nav-link px-3 text-${props.mode==='light'?'dark':'light'}`}>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Business" className={`nav-link px-3 text-${props.mode==='light'?'dark':'light'}`}>Business</NavLink>
        </li>
        <li className="nav-item">
      
        <NavLink to="/Entertainment" className={`nav-link px-3 text-${props.mode==='light'?'dark':'light'}`}>Entertainment</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Health" className={`nav-link px-3 text-${props.mode==='light'?'dark':'light'}`}>Health</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="Science" className={`nav-link px-3 text-${props.mode==='light'?'dark':'light'}`}>Science</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Sports" className={`nav-link px-3 text-${props.mode==='light'?'dark':'light'}`}>Sports</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Technology" className={`nav-link px-3 text-${props.mode==='light'?'dark':'light'}`}>Technology</NavLink>
        </li>
      </ul>
      <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggler}/>
  <label className={`form-check-label ${props.mode==='light'?'dark':'light'}`}>Enable Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
