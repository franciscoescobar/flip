import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Item from "../../pages/Item";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu/" component={Menu} />
      <Route path="/menu/:menuItem" component={Item} />
    </Router>
  );
}

export default App;
