import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink as Link,
  Redirect
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1>My Articles</h1>

              <Link to="/">Home</Link>
         
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
         </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/articles/:id" element={<Article/>}/>
          <Route path="*" element={<Home/>}></Route>
        </Routes>


      </Router>
    </div>
  );
}

export default App
