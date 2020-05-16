import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./main.css";
import AddMonster from "./AddMonster";

const App = () => {
  return (
    <div>
      <img src={logo} alt="Logo" id="logo" />
      <h1>Monsters</h1>
      <h5>Create Monster</h5>
      <AddMonster />
    </div>
  );
};

export default App;
