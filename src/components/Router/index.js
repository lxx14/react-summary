import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Experiences from '../pages/Experiences';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';


export default function () {
  return (
    <Switch>
      <Route exact path='/' component={About} />
      <Route path='/experiences' component={Experiences} />
      <Route path='/projects' component={Projects} />
      <Route path='/skills' component={Skills} />
    </Switch>
  )
}