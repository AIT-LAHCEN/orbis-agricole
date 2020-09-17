import React, { Component } from 'react';

class Videos extends Component{
    render(){
        return(
            //React.Fragment au lieu de div 
            <div className="videos">
                <h2>A props de Orbis Agro Industry</h2>
                <h4>
                Orbis Agro Industry – Animal est une filiale d’Orbis Holding. Elle regroupe l’ensemble des activités liées à l’élevage, au grossissement et à la production laitière du Groupe; avec une production annuelle de 14 millions de litres de lait par an.
Avec les objectifs stratégiques de renforcer la production laitière via d’autres fermes laitières et de développer une unité de transformtion du lait, Orbis Agro Industry – Animal croitra ses chaînes de production et se positionnera en tant qu’industriel laitier.
                </h4>
                <h4>Au Maroc, le lait est une boisson très prisée par les ménages et reste un produit incontournable des tables marocaines. Il se décline sous plusieurs formes dans les épiceries et au sein des grandes et moyennes surfaces (lait frais, yaourts, crèmes, etc.).
De ce fait, le marché du lait au Maroc connait une très forte dynamique, dopée par une évolution de son mode de consommation et une production nationale en deça des capacités du marché.</h4>

                <h4>Orbis Agro Industry – Animal a pour but de produire un lait d’excellente qualité et de garder une place prépondérante parmi les meilleurs producteurs marocains et ce, dans un contexte national très concurrentiel.</h4>
            </div>
        );
    }
}

export default Videos;