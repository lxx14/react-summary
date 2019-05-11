import React, { Component } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Sidebar from './src/components/Sidebar';
import './style.scss';




class App extends Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;