import React, { Component } from 'react';


class WheaterCard extends Component {
    render() {
        return (
            <div className={"weathercards__card weathercards__card--" + this.props.city.color}>
              <div className="weathercards__card__icon"> 
                    <img src={this.props.city.icon}  alt=""/></div>
               <div className="temp">
                <span className="temp__value"> {this.props.city.temp_c}</span>
                <span className="temp__degrees"><sup>o</sup>C</span>
                </div>
                <div>   <i className="fa fa-times-circle weathercards__card__close" aria-hidden="true"></i>
            </div> 
                  <div className="city "> {this.props.city.name} -  {this.props.city.country}</div>
            </div>   

        )
    }
}

export default WheaterCard;
