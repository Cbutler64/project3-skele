import React from "react";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import About from "./pages/About";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  
  <div>
  <Router>
    <div>
    
      <Wrapper>
        <Route exact path="/" component={Register} />
        <Route exact path="/about" component={About} />
    
      </Wrapper>
    </div>
  </Router>
    
  </div>
  

);
  
export default App;
