
import React from 'react';
import Pdi from './product.png';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import '../../css/bootstrap.min.css';
import '../../css/ProdServ.css';

class ProdServ extends React.Component {
   
constructor(props){
 super(props);

 this.state= {
    prodname: this.props.prodname,
    nbrinter: this.props.nbrinter,
    addDate: this.props.addDate
 }
}

    render() {

        return (

            <div>

            <div class="card-prod">
                                    <a href="../product" class="link-to-product">
                                        <img class="prodImg" src={Pdi} alt="Card image cap"/>
                                        <div class="card-body-prod">
            
                                            <h5 class="card-title-prod">{this.state.prodname}</h5>
            
                                            <div class="card-text-prod">
                                                Add Date : {this.state.addDate}
                                            </div>
                                            <br></br>
                                            
                                            <div class="card-text-prod" id="nbi">
                                                Interested in : {this.state.nbrinter}
                                            </div>
            
                                        </div>
                                       
                                    </a>
                                    <div class="btn-delete">
                                            <DeleteForeverIcon/>
                                        </div>
                                </div>
                   </div>
        );
      
        
       
       
    }
}

export default ProdServ;