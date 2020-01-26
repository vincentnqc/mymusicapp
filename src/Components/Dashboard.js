import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './Dashboard.css';


export default function Dashboard() {
  

  return (
   <div className="box">
     <Card1></Card1>
     <Card2></Card2>   
     <Card3/>
     </div>
  );
}