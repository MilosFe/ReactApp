import React, { Component } from 'react';
import logo from './images/logo.png';
import Form from './components/Form';
import WheaterCards from './components/WheaterCards';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cities:[]
    }
  }

  handleAddCity(city){
   let cities = this.state.cities;
   cities.push(city);
   this.setState({cities: cities});
  }
  render() {
    return (
      <div className="container">
        <header id='header-top'>
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <section className='wheater'>
        <Form addCity={this.handleAddCity.bind(this)}/>
       <WheaterCards cities={this.state.cities}/>
        </section>
      </div>
    );
  }
}

export default App;
