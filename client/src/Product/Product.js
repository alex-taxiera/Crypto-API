import React from 'react';
/*import componenets*/

import PicImg from './product components/prodPic';
import ProdInf from './product components/prodInf';

/*designe*/
import '../css/bootstrap.min.css';


class Product extends React.Component {

    render() {
        return (

            <div>
                <div class="row">

                    {/* product image*/ }
                    <div class="col-sm-3">
                      <PicImg/>

                    </div>
                    {/* product information*/ }
                    <div class="col-sm-9">
                   <ProdInf/>

                    </div>

                </div>
            </div>
        );
    }
}

export default Product;