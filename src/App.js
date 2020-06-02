// Imports
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Containers/Nav/Nav';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Footer from './Containers/Footer/Footer';

// React Router used to give our single page application a multiple-page feel. The Nav and Footer are the same on every page, and the content between the two components is re rendered based on the current path that is being executed. Switch helps render only the component specified in the path. Exact Keyword ensures that the Home page only renders when the path is exactly '/'.
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

// Export App Component
export default App;
