import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Project = () =>{
  return(
    <Fragment>


    <h2>Projects</h2>
    <hr/>
    <ul>
     <li><a href="https://hostezon.tech"><h5>1.hosteZON</h5></a>

      <p>This helps Engineering Students to get syllabus of their Exams, Previous Year Papers
      also they can share their ideas with the help of blogs</p>
      <p>In this, I worked on Technologies like Node.JS,Express.JS, React.JS and mongoDB
      to create Backend and frontend of this website.</p>
     </li>
     <br />
     <li><a href="https://gurugracemart.com"><h5>2.GuruGraceMart</h5></a>
     <p>An e-Commerce platform made with the help of wordpress to sell all types
     of groceries</p>
     <p>in this, i used wordpress and some custom css to design the website</p>

     </li>
    </ul>




    </Fragment>
  );
}

export default Project;
