import React, { Component } from 'react';
import Navi from './src/components/Navi';
import Footer from './src/components/Footer';
import Sidebar from './src/components/Sidebar';
import About from './src/components/pages/About';
import './style.scss';




class App extends Component {

  render() {
    return (
      <div className='container'>
        <Navi />
        <About />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;