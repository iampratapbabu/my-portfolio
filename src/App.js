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


const App = () => {
  return (
    <Fragment>
    <Header/>
    <div className="container">
    <h3>Main Body File</h3>

<Switch>
    <Route exact path='/' component={Intro} />
    <Route exact path='/projects' component={Project} />
    <Route exact path='/certifications' component={Certifications} />

    <Route exact path='/skills' component={Skills} />
    <Route exact path='/education' component={Education} />
    <Route exact path='/contact' component={Contact} />
</Switch>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default App;
