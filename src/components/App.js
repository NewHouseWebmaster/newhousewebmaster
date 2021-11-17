import React, { Component } from "react";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import Footer from "./modules/Footer.js";
import {ScrollToTop} from "./modules/ScrollToTop.js";

import "../utilities.css";
import "./App.css";

import About from "./pages/About.js";
import Faq from "./pages/Faq.js";
import Contact from "./pages/Contact.js";
import Facilities from "./pages/Facilities.js";
import Government from "./pages/Government.js";

//FIXME: current routing solution uses deprecated libraries, should migrate to react router 6
import {
  createHistory,
  LocationProvider,
  Router
} from "@reach/router";
import createHashSource from 'hash-source'

let source = createHashSource();
let history = createHistory(source)

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
      <LocationProvider history={history}>
      <div className="App-container">
        <NavBar/>
        
        <Router primary={false}>
          <ScrollToTop path="/">
            <About 
              path="/"
            />
            <Government
              path="/government"
            />
            <Facilities
              path="/facilities"
            />
            <Faq
              path="/faq"
            />
            <Contact
              path="/contact"
            />
            <NotFound default />
          </ScrollToTop>
        </Router>
        <Footer />
        </div>
        </LocationProvider>
      </>
    );
  }
}

export default App;
