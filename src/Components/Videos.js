import React, { Component } from 'react';
import backvid from '../videos/the-farmer_Rlqc19AY_MMD1.mp4';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from '@fortawesome/free-solid-svg-icons'

class Videos extends Component{
    render(){
        return(
            <div className="videos">
                <div className="col-12 padd">
                        <h3><FontAwesomeIcon icon={faSpa} /> A props de Orbis Agro Industry</h3>
                        <hr/>
                        <br/>
                        <br/>
                        <br/>
                        
                </div>
                <a href='http://www.orbisholding.ma/metiers/orbis-agro-industry-animal/' className="thisA"><img className="col-2 float-left" src="orbis-agricole/images/orb1.jpg" alt="orbis agro industry animal"/></a>
                <a href='http://www.orbisholding.ma/metiers/orbis-agro-industry-vegetal/' className="thisA"><img className="col-2 float-right" src="orbis-agricole/images/orb2.jpg" alt="orbis agro industry vigital"/></a>
                <video autoPlay loop muted
                style={{
                    position: "relative",
                    width: "100%",
                    left: "50%",
                    top: "100%",
                    height: "90%",
                    objectFit: "cover",
                    transform: "translate(-50%, -80%)",
                    zIndex: "-1"
                }}>
                    <source src={backvid} type="video/mp4"/>
                </video>
                
            </div>
        );
    }
}

export default Videos;