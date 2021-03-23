import React from 'react';
import '../../css/bootstrap.min.css';

class prodInf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            type:"product",
            OffDem:"Request/offre",
                desc:"ana fleennnnn ",
            
        };
    }
    render() {
        return (
            <div>
  <div class="card-product-info">
                    <div class="card-body-infor">
                        <div class="prod-type">
                       <h6>{this.state.type} : {this.state.OffDem}</h6>
                            </div>
                     
                        <div class="information">
                           <h1>{this.state.desc}</h1>
                           <div>
                               
                           </div>
                        </div>
                       

                    </div>
                </div>
            </div>
         
        );
    }
}

export default prodInf;