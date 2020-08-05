import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <MDBFooter className="footer">
            <MDBContainer fluid className="footer">
                <MDBRow>
                    <MDBCol md="3">
                        <h5 className="title-fouter">Aide</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Conatctez-nous</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Aide</a>
                        </li>
                        <li><Link to='/news'>News</Link></li>
                        <li><Link to='/meteo'>Météo</Link></li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title-fouter">Services</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Réabonnez-vous</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Annonceurs</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Flux RSS</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Mentions légales</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Politique de confidenalité</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Mon compte</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Sites partenaires</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Archives</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">GCU</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Plan de site</a>
                        </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title-fouter">Les sites du groupe</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Site 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Site 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Site 3</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Site 4</a>
                        </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <a className="btn-floating btn-lg btn-fb" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                <a className="btn-floating btn-lg btn-tw" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="http://www.orbisholding.ma/"> orbisholding.ma </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;