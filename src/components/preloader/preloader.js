import React from 'react';
import './preloader.css'
import logo from '../../logo.svg';

export default class Preloader extends React.Component {
constructor(props){
    super()
}

render(){
     return (
         <section className="preloader">
             <img src={logo} alt="logo" className="preloader-logo"  />
              <div style={{paddingLeft: "22px"}}>loading.....</div>
         </section>
         )
    }

 }
