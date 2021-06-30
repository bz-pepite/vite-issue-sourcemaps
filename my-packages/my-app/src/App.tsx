import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "component-lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the main app importing the <code>Button</code> component from
          the package 'component-lib'
        </p>
        <p>
          Library component:{" "}
          <Button text={"this a component from 'component-lib'"}></Button>
        </p>
        <p>
          Please set a break point in the file Button.tsx line 9 and click on
          the button. (break point inside "onClick" function)
          <br /> The break point will not stop the execution of the code.
        </p>
      </header>
    </div>
  );
}

export default App;
