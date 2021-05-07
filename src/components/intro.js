import React,{Fragment} from 'react';


const handleClick = () =>{
window.location.href="/contact";
}

const Intro = () =>{
  return(
    <Fragment>


    <h2>Introduction</h2>
    <hr/>
    <p className="intro-text">I am Tej Pratap, currently  I am pursuing Bachelor of Technology from
    <a href="https://abes.ac.in"> ABES Engineering College</a> in Electronics &
    Communication Engineering Department. I have completed my Intermediate from
    SSR Public School</p>
    <p className="intro-text">I am Begineer Level Full-Stack Web developer specialized in MERN stack</p>
    <button onClick={handleClick}>click Me</button>


    </Fragment>
  );
}

export default Intro;
