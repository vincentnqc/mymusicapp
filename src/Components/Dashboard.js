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
      volume:10
    }
  }

  toggleOnline = () => {
    this.setState({online:!this.state.online})
    if(!this.state.online){
      let newMessages=this.state.messages
      newMessages.push("!online")
      this.setState({messages:newMessages})
    }
    else {
      let newMessages=this.state.messages
      let index=newMessages.findIndex(item => item=="!online")
      newMessages.splice(index,1)
      this.setState({messages:newMessages})
    }
  }

toggleVolume=(event,newValue) => {
  this.setState({volume:newValue})
  let index=this.state.messages.findIndex(item => item=="too loud")
  if(this.state.volume>=80&&index==-1){
    let newMessages=this.state.messages
    newMessages.push("too loud")
    this.setState({messages:newMessages})
  }
  else {
    let newMessages=this.state.messages
    let index=newMessages.findIndex(item => item=="too loud")
    newMessages.splice(index,1)
    this.setState({messages:newMessages})
  }
}

// toggleQuality = () => {
//   this.setState({online:!this.state.online})
//   if(!this.state.online){
//     let newMessages=this.state.messages
//     newMessages.push("!online")
//     this.setState({messages:newMessages})
//   }
//   else {
//     let newMessages=this.state.messages
//     let index=newMessages.findIndex(item => item=="")
//     newMessages.splice(index,1)
//     this.setState({messages:newMessages})
//   }
// }

  render(){
    console.log(this.state.volume)
    return (
   <div className="box">
     <Card1 toggleOnline={this.toggleOnline}></Card1>
     <Card2 toggleVolume={this.toggleVolume}volume={this.state.volume}></Card2>   
     <Card3 toggleQuality={this.toggleQuality}></Card3>
     {this.state.messages.map(message => {
       return(
         <p>{message}</p>
       )
     })}
     </div>
  );
}}
