import React, { Component } from 'react';
import '../css/event.css';
import List from './Event components/EventList';
import Image from './Event components/event.png'


class ProfileEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            event:" covid 19",
            desc:"desc 1"

         };
       
         
    }


    

    render() {
        
      


        return (
            <div class="event">
                <div class="row">
                <List img={Image} event={this.state.event} desc={this.state.desc}/>
                </div>
                <div class="row">
                <List img={Image} event={this.state.event} desc="desc2"/>
                </div>
              
                
                   
                

            </div>
        );
    }
}

export default ProfileEvent;