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
                <img className="col-2 float-left" src="orbis-agricole/images/orb1.jpg" alt="orbis agro industry animal"/>
                <img className="col-2 float-right" src="orbis-agricole/images/orb2.jpg" alt="orbis agro industry vigital"/>
                <video autoPlay loop muted
                style={{
                    position: "relative",
                    width: "100%",
                    left: "50%",
                    top: "100%",
                    height: "85%",
                    objectFit: "cover",
                    transform: "translate(-50%, -82%)",
                    zIndex: "-1"
                }}>
                    <source src={backvid} type="video/mp4"/>
                </video>
                
            </div>
        );
    }
}

export default Videos;