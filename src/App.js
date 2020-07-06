import React, { Component } from 'react';
import QouteCard from './components/QuoteCard';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote : "By chilling my loins I increase the chances of impregnating my wife.",
      character: "Apu Nahasapeemapetilon",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    }
  }

  getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
        .then(data => {
          console.log(data);
          this.setState({
            character: data[0].character,
            image: data[0].image,
            quote: data[0].quote,
          })
        })
  }
  render(){
    //const { qoute, image, character } = this.state
    return (
      <div className="App">
        <h5>Simpsons' Qoutes</h5>
        <QouteCard quote={this.state.quote} image={this.state.image} character={this.state.character} />
        <button type="button" onClick={this.getQuote}>Change quote </button>
      </div>
    );
  }
}

export default App;
