import React, { Component } from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import * as dataagricole from '../Shared/dataStats';


/* defaults.global.defaultFontFamily = 'lato'; */
defaults.global.defaultFontSize = 14;

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{

                // Data pour les ouefs
                oeufs :{
                    labels: dataagricole.Anneelabels,
                    datasets: [
                        {
                            label: "Production d'oeufs (MILLIONS UNITES)",
                            data: dataagricole.dataOuefs,
                            backgroundColor: "#f79e9e9c",
                            borderWidth: 2,
                            borderColor: "#f79e9e",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour le viande blanche
                viandeBlanche: {
                    labels: dataagricole.Anneelabelsv2,
                    datasets: [
                        {
                            label: "Production de la viande blanche (MILLIERS DE TONNES)",
                            data: dataagricole.dataViandeBlanche,
                            backgroundColor: "#f79e9e9c",
                            borderWidth: 2,
                            borderColor: "#f79e9e",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour le viande rouge
                viandeRouge: {
                    labels: dataagricole.Anneelabels,
                    datasets: [
                        {
                            label: "Production de la viande rouge (MILLIERS DE TONNES)",
                            data: dataagricole.dataViandeRouge,
                            backgroundColor: "#f79e9e9c",
                            borderWidth: 2,
                            borderColor: "#f79e9e",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour les agrumes
                Agrumes: {
                    labels: dataagricole.Anneelabels,
                    datasets: [
                        {
                            label: "Production d'agrumes (TONNE)",
                            data: dataagricole.dataAgrumes,
                            backgroundColor: "#f9cc79",
                            borderWidth: 2,
                            borderColor: "#FFA500", 
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour les legumes
                Legumineuses: {
                    labels: dataagricole.Anneelabels,
                    datasets: [
                        {
                            label: "Production de légumineuses (MILLIERS DE QUINTAUX)",
                            data: dataagricole.dataLegumineuse,
                            backgroundColor: "#f9cc79",
                            borderWidth: 2,
                            borderColor: "#FFA500",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour les Cultures Indusctrielles
                CulturesIndustrielles: {
                    labels: dataagricole.Anneelabels_2008_2016,
                    datasets: [
                        {
                            label: "Production de cultures industrielles (MILLIERS DE QUINTAUX)",
                            data: dataagricole.dataCulturesIndustrielles,
                            backgroundColor: "#f9cc79",
                            borderWidth: 2,
                            borderColor: "#FFA500",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour les Céréales
                Cereales: {
                    labels: dataagricole.Anneelabels,
                    datasets: [
                        {
                            label: "Superficie cultivée des céréales (MILLIERS DE HA)",
                            data: dataagricole.dataCereales,
                            backgroundColor: "#b9f6ca",
                            borderWidth: 2,
                            borderColor: "#009c3f",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour les Cultures fourragères
                CulturesFourragers: {
                    labels: dataagricole.Anneelabels,
                    datasets: [
                        {
                            label: "Superficie cultivée des cultures fourragères (MILLIERS DE HA)",
                            data: dataagricole.dataCulturesFourrageres,
                            backgroundColor: "#b9f6ca",
                            borderWidth: 2,
                            borderColor: "#009c3f",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                },
                // Data pour les jachères
                Jacheres: {
                    labels: dataagricole.Anneelabels_2009_2017,
                    datasets: [
                        {
                            label: "Superficie laissée en jachère (MILLIERS DE HA)",
                            data: dataagricole.dataJacher,
                            backgroundColor: "#b9f6ca",
                            borderWidth: 2,
                            borderColor: "#009c3f",
                            hoverBorderWidth: 2,
                            hoverBorderColor: "#000"
                        }
                    ]
                }
                
            }
        }
    }

    renderSwitch(param) {
        switch (param) {
            case 'ouefs':
                return <Bar
                    data={this.state.chartData.oeufs}
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
                            title: {
                                display: true,
                                text: "Production d'oeufs par MILLIONS D'UNITES de 2010 à 2018",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'viandeblanche':
                return <Bar show={false}
                    data={this.state.chartData.viandeBlanche}
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
                            title: {
                                display: true,
                                text: "Production de la viande blanche (MILLIERS DE TONNES) de 2009 à 2018",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'vianderouge':
                return <Bar show={false}
                    data={this.state.chartData.viandeRouge}
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
                            title: {
                                display: true,
                                text: "Production de la viande rouge (MILLIERS DE TONNES) de 2010 à 2018",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'agrumes':
                return <Bar show={false}
                    data={this.state.chartData.Agrumes}
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
                            title: {
                                display: true,
                                text: "Production d'agrumes (TONNE) de 2010 à 2018",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'legumineuses':
                return <Bar show={false}
                    data={this.state.chartData.Legumineuses}
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
                            title: {
                                display: true,
                                text: "Production de légumineuses (MILLIERS DE QUINTAUX) de 2010 à 2018",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'culturesindustrielles':
                return <Bar show={false}
                    data={this.state.chartData.CulturesIndustrielles}
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
                            title: {
                                display: true,
                                text: "Production de cultures industrielles (MILLIERS DE QUINTAUX) de 2008 à 2016",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'culturesfourrageres':
                return <Bar show={false}
                    data={this.state.chartData.CulturesFourragers}
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
                            title: {
                                display: true,
                                text: "Superficie cultivée des cultures fourragères (MILLIERS DE HA) de 2010 à 2018",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'cereales':
                return <Bar show={false}
                    data={this.state.chartData.Cereales}
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
                            title: {
                                display: true,
                                text: "Superficie cultivée des céréales (MILLIERS DE HA) de 2010 à 2018",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            case 'jachere':
                return <Bar show={false}
                    data={this.state.chartData.Jacheres}
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
                            title: {
                                display: true,
                                text: "Superficie laissée en jachère (MILLIERS DE HA) de 2009 à 2017",
                                fontSize: 25
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                />;
            default :
                return <div><p>No content</p></div>
        }
    }
    
    
    render(){
        return(
            <div className="chart">

                {this.renderSwitch(this.props.children.show)}
                
            </div>
        );
    }
}

export default Chart;