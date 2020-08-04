import React, { Component } from 'react';
import InputCity from '../Containers/InputCity' ;

export default class Meteo extends Component {
    state = {
        temperature : '',
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
            console.log(data);
          const kelvin = data.list[0].main.temp ;
          const celcius = kelvin - 273.15 ;
          this.setState({
            temperature : celcius ,
            isBusy : false 
          })
        }).catch(error=>{
          this.setState({
            error : 'data not found :(' ,
            isBusy : false
          })
        })
        
      }
      
      render(){
        let data = null ;
        if(this.state.isBusy && !this.state.error){
          data = <p  style={{textAlign : 'center'}}> Loading ... </p>
        } else if (this.state.error) {
          data =  <p  style={{textAlign : 'center'}}>Something Went Wrong : {this.state.error}</p>
        } else if(this.state.temperature !== '') {
          data = <p  style={{textAlign : 'center'}}>Temperature is : {this.state.temperature} degree celcius.</p>
        }
        return(
          <React.Fragment>
              <InputCity getTemperature={this.getTemperature}/> <br/>
              {data}
          </React.Fragment>
        );
      }
}

