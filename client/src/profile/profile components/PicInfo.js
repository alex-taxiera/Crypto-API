import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/bootstrap.min.css';

class PicInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cmp: this.props.cmpname,
            src: this.props.src,
            name: this.props.name,
            jobpos: this.props.jobpos,
            location: this.props.loc,
        }
    }

    render() {

        const pi = (
            <div>
                <div class="card-pic-info">
                    <img src={this.state.src} class="profimg" alt="image of the company"/>

                    <div class="card-body">
                        <h5 class="card-title">{/*this.state.name*/}
                            Presenter name</h5>
                        <div class="card-text">
                            <div>{this.state.jobpos}
                                at {this.state.cmp}</div>
                            <div>{this.state.location}</div>
                           

                        </div>

                    </div>
                </div>

            </div>

        );
        return pi;
    }

}

export default PicInfo;