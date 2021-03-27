import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.min.css';


class ProfAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cmp: this.props.cmpname,
            cmpDesc: this.props.desc
        }
    }

    render() {
        const action = (

            <div>

                <div class="card-prof-action">
                    <div class="card-body-action ">
                        <h1 class="cmpName">{this.state.cmp}</h1>

                    </div>
                    <div class="ligne">
                        
                        <hr class="seprate"></hr>
                     
                    </div>
                    <div class="descCmp">
                        {this.state.cmpDesc}
                    </div>

                </div>

            </div>

        );

        return action;
    }
}

export default ProfAction;