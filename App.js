import React, { Component } from 'react';
import Navi from './src/components/Navi';
import Footer from './src/components/Footer';
import Sidebar from './src/components/Sidebar';
import About from './src/components/pages/About';
import Router from './src/components/Router';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <div className='main-wrap'>
            <Navi />
            <Router />
            <Sidebar />
          </div>
          <Footer />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;