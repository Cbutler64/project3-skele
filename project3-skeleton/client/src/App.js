import React from "react";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  
  <div>
  <Router>
    <div>
    
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
      </Wrapper>
    </div>
  </Router>
    
  </div>
  

);
  
export default App;
