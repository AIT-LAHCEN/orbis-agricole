import React, { Component } from 'react';
import InputCity from '../Containers/InputCity' ;
import { Table, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faThermometerFull, faThermometerEmpty, faThermometerThreeQuarters, faWater, faWind } from '@fortawesome/free-solid-svg-icons'



export default class Meteo extends Component {
    state = {
        hours : [],
        temperature : [],
        temperatureMin : [],
        temperatureMax : [],
        Humidite : [],
        Vent : [],
        error : '' ,
        isBusy : false
      }
    
      getTemperature = (city)=> {
        const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=7268ea0bf303729ff148a78f3aa824fd';
        this.setState({
          isBusy : true 
        })
        fetch(url).then(response=>{
          return response.json();
        }).then(data=>{
            // console.log(data);
            let hoursToReturn = [];
            let tempToReturn = [];
            let tempMinToReturn = [];
            let tempMaxToReturn = [];
            let humiditeToReturn = [];
            let ventToReturn = [];
            const hoursList = () => {
                for (let i = 0; i < 7; i++) {
                  hoursToReturn.push(<th>{data.list[i].dt_txt}</th>);
                }
                return hoursToReturn;
              };
              const humiditeList = () => {
                for (let i = 0; i < 7; i++) {
                    humiditeToReturn.push(<th>{data.list[i].main.humidity}</th>);
                }
                return humiditeToReturn;
              };
              const ventList = () => {
                for (let i = 0; i < 7; i++) {
                    ventToReturn.push(<th>{data.list[i].wind.speed}</th>);
                }
                return ventToReturn;
              };
              const tempList = () => {
                for (let i = 0; i < 7; i++) {
                    const kelvin = data.list[i].main.temp ;
                    const celcius = kelvin - 273.15 ;
                    var n = celcius.toFixed(2);
                  tempToReturn.push(<th>{n}</th>);
                }
                return tempToReturn;
              };
              const tempMinList = () => {
                for (let i = 0; i < 7; i++) {
                    const kelvin = data.list[i].main.temp_min ;
                    const celcius = kelvin - 273.15 ;
                    var n = celcius.toFixed(2);
                  tempMinToReturn.push(<th>{n}</th>);
                }
                return tempMinToReturn;
              };
              const tempMaxList = () => {
                for (let i = 0; i < 7; i++) {
                    const kelvin = data.list[i].main.temp_max ;
                    const celcius = kelvin - 273.15 ;
                    var n = celcius.toFixed(2);
                  tempMaxToReturn.push(<th>{n}</th>);
                }
                return tempMaxToReturn;
              };
          this.setState({
            hours : hoursList(),
            temperature : tempList() ,
            temperatureMin : tempMinList() ,
            temperatureMax : tempMaxList() ,
            Humidite : humiditeList(),
            Vent : ventList(),
            isBusy : false 
          })
        }).catch(error=>{
          this.setState({
            error : '_' ,
            isBusy : false
          })
        })
        
      }
      
      render(){
        return(
          <React.Fragment>
                <div className="padd">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Accueil</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Météo</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3><FontAwesomeIcon icon={faThermometerThreeQuarters} /> Météo</h3>
                        <hr/>
                    </div>
                </div>
              <InputCity getTemperature={this.getTemperature}/> <br/>
              <Table bordered hover striped variant="dark">
                <thead>
                    <tr>
                  <th><FontAwesomeIcon icon={faClock} className="fa-fw"/> <span class="ml-2">Dates & Heures</span> </th>
                    {this.state.hours}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                  <th scope="row"><FontAwesomeIcon icon={faThermometerThreeQuarters} className="fa-fw" /> <span class="ml-2">Température (°C)</span></th>
                    {this.state.temperature}
                    </tr>
                    <tr>
                  <th scope="row"><FontAwesomeIcon icon={faThermometerEmpty} className="fa-fw" /> <span class="ml-2">Température min (°C)</span></th>
                    {this.state.temperatureMin}
                    </tr>
                    <tr>
                  <th scope="row"><FontAwesomeIcon icon={faThermometerFull} className="fa-fw" /> <span class="ml-2">Température max (°C</span>)</th>
                    {this.state.temperatureMax}
                    </tr>
                    <tr>
                  <th scope="row"><FontAwesomeIcon icon={faWater} className="fa-fw"/> <span class="ml-2">Humidité (%)</span></th>
                    {this.state.Humidite}
                    </tr>
                    <tr>
                  <th scope="row"><FontAwesomeIcon icon={faWind} className="fa-fw"/> <span class="ml-2">Vitesse du vent (km/h)</span> </th>
                    {this.state.Vent}
                    </tr>
                </tbody>
            </Table>
          </React.Fragment>
        );
      }
}

