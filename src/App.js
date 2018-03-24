import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabsinterface from './Tabsinterface';
const api ='http:Localhost:3000/api/v1';
const default_query = 'app';
+import Background from './Background';
class App extends Component {
  componentDidmount(){
    //fetch(api + default_query)
    fetch ('http:Localhost:3001/api/v1/app')
    .then (response=> response.jason())
    .then(json => {
        console.log(json);
        this.setsate({
            data: json
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>Poke Dex</h1>
        </header>
    <body>
    <nav>
    <ul>
    <li>Egg Group</li>
      <li>Regios</li>
      <li>Stats</li>
        <li>gen</li>
      </ul>
    </nav>
    <div class= "leftcolumn">
      <img src="http://static.tumblr.com/6a7f5a78bb6eff2099fd46f71f88b226/0z3unxz/s9Bmgyyya/tumblr_static_dratini_hd.png" width="100" height="50" alt="dratini"/>
      <p> text goes here </p>
        <img src="http://fullhdpictures.com/wp-content/uploads/2016/09/Dragonair.png" width="100" height="50" alt="dranair"/>
      <p> text goes here </p>
    </div>
      <div class= "rightcolum">
        <img src="http://img07.deviantart.net/9dd3/i/2014/254/b/f/dragonite_dragon_claw_by_izzarchron-d7yun57.png" width="100" height="50" alt="dragonite"/>
        <p> text goes here </p>
        <img src="" width="500" height="50" alt="dragonite"/>
      </div>
     <Tabsinterface />
    </body>
      </div>
    );
  }
}

export default App;
