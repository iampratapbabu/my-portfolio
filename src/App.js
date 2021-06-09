import React ,{Fragment}from 'react';
import {Route,Switch} from 'react-router-dom';

//layouts
import Header from './layout/Header';
import Footer from './layout/Footer';

//components
import Project from './components/projects';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Education from './components/education';
import Intro from './components/intro';
import Skills from './components/skills';
import Videos from './components/Videos';


const App = () => {
  return (
    <Fragment>

    <div className="container">

   <div class="row shadow p-3 mb-5 bg-body rounded">

     <div class="col-sm-8 col-lg-3 nav-header">
       <Header/>
     </div>

     <div class="col-sm-8 col-lg-9 nav-content">
     <Switch>
         <Route exact path='/' component={Intro} />
         <Route exact path='/projects' component={Project} />
         <Route exact path='/certifications' component={Certifications} />

         <Route exact path='/skills' component={Skills} />
         <Route exact path='/education' component={Education} />
         <Route exact path='/contact' component={Contact} />
         <Route exact path='/videos' component={Videos} />
     </Switch>

     </div>
    
   </div>


    </div>
    
    </Fragment>
  );
}

export default App;
