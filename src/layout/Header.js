import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import img from '../images/img.png';


//styles

const Header = () =>{
  return(
    <Fragment>
<div>
    <img alt="admin-img" class="block-img" src={img} width="150" height="180"/>
      <h4><Link to='/'>TEJ PRATAP</Link></h4>
      <hr/>
      <ul>
        <li><Link className="btn btn-light"  to="/projects">Projects</Link></li>
        <li><Link className="btn btn-light"  to="/education">Education</Link></li>
        <li><Link className="btn btn-light"  to="/certifications">Certifications</Link></li>
        <li><Link className="btn btn-light"  to="/contact">Contact</Link></li>
        <li><Link className="btn btn-light"  to="/skills">Skills</Link></li>
      </ul>
  </div>


    </Fragment>
  );
}

export default Header;
