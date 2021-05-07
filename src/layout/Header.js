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
      <a href="https://www.linkedin.com/in/pratapbabu/"><i class="fab fa-linkedin fa-2x icon-1"></i></a>
      <a href="mailto:kumarpratap.1447@gmail.com"><i class="fas fa-envelope fa-2x icon-2"></i></a>
      <a href="https://www.youtube.com/channel/UCkAI4QIeeNpCyXQjgrLL-ew"><i class="fab fa-youtube fa-2x icon-3"></i></a>
      <a href="https://github.com/iampratapbabu"><i class="fab fa-github fa-2x icon-4"></i></a>
      <hr/>
      <ul>
        <li><Link className="btn btn-light"  to="/projects">Projects</Link></li>
        <li><Link className="btn btn-light"  to="/education">Education</Link></li>
        <li><Link className="btn btn-light"  to="/certifications">Certifications</Link></li>
        <li><Link className="btn btn-light"  to="/skills">Skills</Link></li>

      </ul>
  </div>


    </Fragment>
  );
}

export default Header;
