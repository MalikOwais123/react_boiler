import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routing/Routing";

const App = () => {
  return (
    <Router>
      <Routing />
    </Router>
  );
};

export default App;
