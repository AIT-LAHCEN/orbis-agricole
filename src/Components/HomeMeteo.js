import React, { Component } from 'react';
import InputCity from '../Containers/InputCity' ;
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faThermometerFull, faThermometerEmpty, faThermometerThreeQuarters} from '@fortawesome/free-solid-svg-icons'



export default class HomeMeteo extends Component {
    state = {
        hours : [],
        temperature : [],
        temperatureMin : [],
        temperatureMax : [],
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
            const hoursList = () => {
                for (let i = 0; i < 5; i++) {
                  hoursToReturn.push(<th>{data.list[i].dt_txt}</th>);
                }
                return hoursToReturn;
              };
              const tempList = () => {
                for (let i = 0; i < 5; i++) {
                    const kelvin = data.list[i].main.temp ;
                    const celcius = kelvin - 273.15 ;
                    var n = celcius.toFixed(2);
                  tempToReturn.push(<th>{n}</th>);
                }
                return tempToReturn;
              };
              const tempMinList = () => {
                for (let i = 0; i < 5; i++) {
                    const kelvin = data.list[i].main.temp_min ;
                    const celcius = kelvin - 273.15 ;
                    var n = celcius.toFixed(2);
                  tempMinToReturn.push(<th>{n}</th>);
                }
                return tempMinToReturn;
              };
              const tempMaxList = () => {
                for (let i = 0; i < 5; i++) {
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
                    <div className="col-12">
                        <h3><FontAwesomeIcon icon={faThermometerThreeQuarters} /> Météo</h3>
                        <hr/>
                    </div>
                </div>
              <InputCity getTemperature={this.getTemperature}/> <br/>
              <Table  hover striped variant="dark" className="table table-fit table-responsive padd">
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
                </tbody>
            </Table>
          </React.Fragment>
        );
      }
}

