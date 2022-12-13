import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      

        <Router>
          <>
        <Navbar></Navbar>
        
        <Routes>          
          
          <Route exact path="/" element={<News key="general" pagesize={20} country='in' categorys='general' ></News>}></Route>
          <Route exact path="/business" element={<News key="business" pagesize={20} country='in' categorys='business' ></News>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pagesize={20} country='in' categorys='entertainment' ></News>} ></Route>
          <Route exact path="/general" element={<News key="general" pagesize={20} country='in' categorys='general' ></News>}></Route>
          <Route exact path="/health" element={<News key="health" pagesize={20} country='in' categorys='health' ></News>}></Route>
          <Route exact path="/science" element={<News key="science" pagesize={20} country='in' categorys='science' ></News>}></Route>
          <Route exact path="/sports" element={<News key="sports" pagesize={20} country='in' categorys='sports' ></News>} ></Route>
          <Route exact path="/technology" element={<News key="technology" pagesize={20} country='in' categorys='technology' ></News>}></Route>


        </Routes>

        </>
        </Router>
      
    )
  }
}

