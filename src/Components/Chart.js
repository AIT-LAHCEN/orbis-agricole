import React, { Component } from 'react';
import { Bar, defaults } from 'react-chartjs-2';


/* defaults.global.defaultFontFamily = 'lato'; */
defaults.global.defaultFontSize = 14;

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ["2010","2011","2012","2013","2014","2015","2016","2017","2018"],
                datasets : [
                    {
                        label:"Production d'oeufs (MILLIONS UNITES)",
                        data:[
                            4500,	
                            5100,	
                            5100,	
                            5300,	
                            4900,	
                            5900,	
                            5800,	
                            6300,	
                            6600
                        ],
                        backgroundColor: "#b3fcf6",
                        borderWidth : 2,
                        borderColor:"#79e0d8",
                        hoverBorderWidth:2,
                        hoverBorderColor:"#000"
                    }
                ]
            }
        }
    }
    
    
    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={240}
                    height={100}
                    options={
                        { 
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            },
                            title :{
                                display : true,
                                text: "Production d'oeufs par MILLIONS D'UNITES de 2010 à 2018",
                                fontSize : 25
                            },
                            legend : {
                                display:false
                            }
                        }
                    }
                />
            </div>
        );
    }
}

export default Chart;