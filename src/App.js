import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pSize = 15;
  country = "in";
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} key="Home" pageSize={this.pSize} country={this.country} category="home" />} />
            <Route exact path='/business' element={<News apiKey={this.apiKey} key="business" pageSize={this.pSize} country={this.country} category="business" />} />
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pSize} country={this.country} category="entertainment" />} />
            <Route exact path='/general' element={<News apiKey={this.apiKey} key="general" pageSize={this.pSize} country={this.country} category="general" />} />
            <Route exact path='/health' element={<News apiKey={this.apiKey} key="health" pageSize={this.pSize} country={this.country} category="health" />} />
            <Route exact path='/science' element={<News apiKey={this.apiKey} key="science" pageSize={this.pSize} country={this.country} category="science" />} />
            <Route exact path='/sports' element={<News apiKey={this.apiKey} key="sports" pageSize={this.pSize} country={this.country} category="sports" />} />
            <Route exact path='/technology' element={<News apiKey={this.apiKey} key="technology" pageSize={this.pSize} country={this.country} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
