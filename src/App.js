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

    else defaultView = <div className="viewcontainer">
    <div className="view">
    <TextField label="Username*" style={{width:"100%"}} ></TextField>
     <br></br>
    <TextField label="Password*" type="password" style={{width:"100%"}} ></TextField>
    <br></br>
    <br></br>
    <Button variant="contained" color="primary" style={{width:"100%"}} onClick={this.logIn}>LOGIN</Button>
    </div>
    </div>
    
      return (
    <div className="App">
      <Appbar></Appbar>
      {defaultView}
      
    </div>
  );
}}

export default App;