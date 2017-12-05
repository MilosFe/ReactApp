import React, { Component } from 'react';


class Form extends Component {
constructor(){
    super();
    this.state = {
        newCity: {}
    }
}

    getColor(temp) {
        if (temp < 15) {
            return 'blue';
        } else if (temp < 30) {
            return 'red';
        } else {
            return 'orange';
        }
    }
    handleSubmit(e){
        var city = this.refs.city.value;
        var url = "https://api.apixu.com/v1/current.json?key=cc1b41f849084ab9a1e173908170112&q=" + city;
       
        
        fetch(url).then(response => response.json())
            .then(data =>{
         
               var color = this.getColor(data.current.temp_c);
                var temp = Math.floor(data.current.temp_c);
                this.setState({
                    newCity: {
                        name: data.location.name,
                        temp_c: temp,
                        country: data.location.country,
                        color: color,
                        icon: data.current.condition.icon
                    }
                });
               
            }).then(()=>{
                this.props.addCity(this.state.newCity);
            });
     
     
        e.preventDefault(); 
    }

  render() {
    return (
        <form action=""  className='weather_form'>
            <h1 className="app-title">How's is the weather in..</h1>
            <div className="form-group">
                <label htmlFor="Location" className="form-location">Location:</label>
                <input id="city" className='form-control' ref="city" />
                <i className="fa fa-plus add" onClick={this.handleSubmit.bind(this)} aria-hidden="true"></i>
            </div>
        </form>
    );
  }
}

export default Form;
