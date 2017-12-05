import React, { Component } from 'react';
import WheaterCard from './WheaterCard';

class WheaterCards extends Component {

    render() {
        let cards;
        if(this.props.cities){
            cards = this.props.cities.map(function(city){
                return <WheaterCard key={city.name} city={city} />
            })
          
        };
        return (
            <div className="weathercards">  
               {cards}
            </div>
        );
    }
}

export default WheaterCards;
