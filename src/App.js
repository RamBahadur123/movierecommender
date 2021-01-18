
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Hero from './components/Hero/index';
import Card from './components/Card/index';
import Form from './components/Form/index';
import Footer from './components/Footer/index';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Container/Home/index';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Route path="/Home" Component={Home}/>
        <Hero />
        <div style={{ marginTop: '50px' }}>
          <Card />
        </div>
        <div style={{marginTop:'50px'}}>
          <Form/>
        </div>
        <Footer/>
      </div>
      </Router>
    );
  }
}



export default App;
