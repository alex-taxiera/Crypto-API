import React from 'react';
import CmpAv from './cmp.jpg'
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import '../../css/bootstrap.min.css';
import '../../css/productStyle.css';

class prodPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prodname: "Vice"
        }
    }

    render() {
        return (
            <div>
                <div class="card-avatar">
                    <div class="card-body-avatar">
                        <div class="avatar">
                            <img src={CmpAv} class="CmpPic"/>
                        </div>

                        <div class="ProdName">
                            <h1>{this.state.prodname}</h1>
                            <div></div>
                        </div>
                        <div class="actionBtn">
                            <button class="btnUpdateProd" alt="helo"><SettingsIcon/>

                            </button>
                            <button type="button" class="btnDeleteProd"><DeleteForeverIcon/>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default prodPic;
