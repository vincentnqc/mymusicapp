import React, {Component} from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './Dashboard.css';


export default class Dashboard extends Component {
  constructor(props) {
    super(props) 
    this.state={
      messages:[],
      online:true,
      volume:10,
      quality: 20
    }
  }

  toggleOnline = () => {
    this.setState({online:!this.state.online})
    if(this.state.online){
      let newMessages=this.state.messages
      newMessages.push("Your application is offline. You won't be able to share or stream music to other devices.")
      this.setState({messages:newMessages})
    }
    else {
      let newMessages=this.state.messages
      let index=newMessages.findIndex(item => item=="Your application is offline. You won't be able to share or stream music to other devices.")
      newMessages.splice(index,1)
      this.setState({messages:newMessages})
    }
  }

toggleVolume=(event,newValue) => {
  this.setState({volume:newValue})
  let index=this.state.messages.findIndex(item => item=="Listening to music at a high volume could cause long-term hearing loss.")
  if(newValue>=80&&index==-1){
    let newMessages=this.state.messages
    newMessages.push("Listening to music at a high volume could cause long-term hearing loss.")
    this.setState({messages:newMessages})
  }
  else if(!(newValue>=80)) {
    let newMessages=this.state.messages
    // let index=newMessages.findIndex(item => item=="too loud")
    newMessages.splice(index,1)
    this.setState({messages:newMessages})
  }
}

toggleQuality = (e) => {
  console.log("anything",e.target.value)
  this.setState({quality:e.target.value})
  console.log(this.state)
  let index=this.state.messages.findIndex(item => item=="Music quality is degraded. Increase quality if your connection allows it.")
  if(e.target.value===10&&index===-1){
    let newMessages=this.state.messages
    newMessages.push("Music quality is degraded. Increase quality if your connection allows it.")
    this.setState({messages:newMessages})
  }
  else if(e.target.value!==10) {
    let newMessages=this.state.messages
    
    newMessages.splice(index,1)
    this.setState({messages:newMessages})
  }
}

  render(){
    // console.log(this.state.volume)
    return (

   <div>
     <div className="box">
      <Card1 toggleOnline={this.toggleOnline}></Card1>
      <Card2 toggleVolume={this.toggleVolume}volume={this.state.volume}></Card2>   
      <Card3 toggleQuality={this.toggleQuality}></Card3>
     </div>
     <div>
       <h5>Sytem Notifications:</h5>
      {this.state.messages.map(message => {
        return(
          <p>{message}</p>
        )
      })}
     </div>
     </div>
  );
}}
