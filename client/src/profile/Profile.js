import React from 'react';

import ProdSector from './profile components/prodSector.js'
import ProfAction from './profile components/ProfAction.js'
/*img*/
import PicInfo from './profile components/PicInfo.js'
import logo from './profile components/avatar2.png';

/*css*/
import '../css/prof.css';
import '../css/bootstrap.min.css';
class Profile extends React.Component {



    render() {
        const x = {
            src: logo,
            cmpname: " APII",
            name: "khalil ben said",
            jobpos: "CEO",
            loc: "7, Syrie street, Tunis,Tunisia",
            desc:"company description"
        };

        
        const prof = (
            <div class="containerr">
                <div class="cont">


{/*nav test*/}





{/*end nav test */}


                    <div class="row">
                        <div class="col-sm-6" id="info">

                            <PicInfo
                                src={x.src}
                                name={x.name}
                                jobpos={x.jobpos}
                                cmpname={x.cmpname}
                                loc={x.loc}/>
                        </div>

                        <div class="col-6" id="rightpart">

                            <ProfAction cmpname={x.cmpname} desc={x.desc}/>

                            <ProdSector/>
                        </div>

                    </div>

                </div>

            </div>

        );

        return prof;

    }
}

export default Profile;