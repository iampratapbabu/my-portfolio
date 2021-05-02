import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

//styles
import '../styles/header.css'

const Header = () =>{
  return(
    <Fragment>
    <div className="container">
      <h4><Link to='/'>Tej Pratap</Link></h4>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </div>
    <hr/>
    </Fragment>
  );
}

export default Header;
