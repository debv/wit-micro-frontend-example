import React from "react";
import ReactDOM from "react-dom";

// Import Counter component from remote app module
import Counter from "remote_app/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host-app</div>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
