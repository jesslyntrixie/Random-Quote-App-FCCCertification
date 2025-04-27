import React, { Component } from 'react';
import QuoteBox from './QuoteBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: "Work heartily, as for the Lord and not for men",
      author: "Colossians 3:23",
      color: "#6BCB77"
    };
    this.setNewQuote = this.setNewQuoteReducer.bind(this);
  }

  setNewQuoteReducer(state){
    this.setState({
      quote: state.quote,
      author: state.author,
      color: state.color
    });
  }

  render(){
    return (
      <div id="appdiv" style={{backgroundColor: this.state.color}}>
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          color={this.state.color}
          setNewQuote={this.setNewQuote}
        />
      </div>
    );
  }
}

export default App;
