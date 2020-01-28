import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './Components/Appbar';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dashboard from './Components/Dashboard';

class App extends Component {
  state = {
   loggedIn: false,

  }

  logIn = () =>{
    this.setState ({
      loggedIn: true
    })
  }



  render() {
    let defaultView;
    if(this.state.loggedIn){
      defaultView = <Dashboard></Dashboard>
    }

    else defaultView = <div>
    <TextField></TextField>
     <br></br>
    <TextField></TextField>
    <br></br>
    <Button variant="contained" onClick={this.logIn}>Default</Button>
    </div>
    
      return (
    <div className="App">
      <Appbar></Appbar>
      {defaultView}
      
    </div>
  );
}}

export default App;