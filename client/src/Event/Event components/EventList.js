import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img:this.props.img,
            event:this.props.event,
            desc:this.props.desc
          
         };
    }
    render() {
        return (
         <div>
<div class="card text-white">
  <img src={this.state.img} class="card-img" alt="event image"/>
  <div class="card-img-overlay">
    <div class="row">
      <div class="col-10" >
      <h5 class="event-title">{this.state.event}</h5>
    <p class="event-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="event-text">{this.state.desc}</p>
      </div>
      <div class="col-2"> 
      <button class="btn-participate">participate</button>
    </div>
    </div>
   
    
  </div>
</div>

           </div>
          
        );
    }
}

export default EventList;