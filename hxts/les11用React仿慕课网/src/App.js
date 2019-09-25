import React, { Component } from 'react';
import './shengti.css';
import Head from "./head/head";
import Mains from "./mains/js/maint";
import Footers from "./footers/foot";
import Goto from "./goto/gotos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Mains />
        <Footers/>
        <Goto/>
      </div>
    );
  }
}

export default App;
