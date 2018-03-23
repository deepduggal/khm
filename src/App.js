import React, { Component } from 'react';
import './App.css';
import {Navbar, Landing, Work, Services, Contact} from './components/_components.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <main>
          <Landing/>
          <Work/>
          <Services/>
          <Contact/>
        </main>
      </div>
    );
  }
}

export default App;
