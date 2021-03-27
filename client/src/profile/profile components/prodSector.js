import React from 'react';
import ProdServ from './ProdServ';
import '../../css/bootstrap.min.css';

/*caroussel*/
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


class ProdSector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prodname: "produit 1",
            nbrinter: "3",
            addDate: "13/1/2020"
        }
    }

    render() {
        const sec = (
            <div>
                <div class="card-prod-sector">

                    {/*loop for back filling*/}
                   
                  


                    <Carousel>
                        <div>
                        <div class="row">
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>

                    </div>
                        </div>
                        <div>
                        <div class="row">
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>

                    </div>

                        </div>
                        <div>
                        <div class="row">
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>
                        <div class="col-4">
                            <ProdServ
                                prodname={this.state.prodname}
                                nbrinter={this.state.nbrinter}
                                addDate={this.state.addDate}/>
                        </div>

                    </div>

                        </div>
                    </Carousel>

                </div>

            </div>

        );

        return sec;
    }

}
export default ProdSector;