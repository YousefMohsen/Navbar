import React, { Component } from "react";
import Topbar from "./Menubar/Topbar/Topbar";
import Feed from "./Feed.js";

class App extends Component {
  render() {
    return (
      <div>
        <Topbar /> {/*implement the code in the Topbar component*/}
        <Feed />
      </div>
    );
  }
}

export default App;
