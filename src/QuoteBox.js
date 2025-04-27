import React, { Component } from 'react';

class QuoteBox extends Component {
  constructor(props){
    super(props);
    this.handleNewQuote = this.handleNewQuote.bind(this);
   
    this.colors = [
      "#3B3B98", // muted deep blue
      "#218c74", // soft green
      "#596275", // gentle grayish blue
      "#3DC1D3", // light teal
      "#58B19F", // mild turquoise
      "#9AECDB", // pale aqua
      "#F8EFBA", // soft cream
      "#574b90", // soft violet
      "#786FA6", // muted purple
      "#E77F67", // soft coral
      "#778beb", // soft blue
      "#f19066", // gentle orange
      "#f6b93b", // soft gold
      "#e55039", // soft red
      "#60a3bc"  // muted sky blue
    ]
    ;
    
      
  }

  handleNewQuote(){
    let oldcolor= this.props.color;
    let newcolor = this.props.color;
    
    while (newcolor == oldcolor){
        newcolor = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    const color = newcolor;
   

    fetch('https://api.quotable.io/quotes/random?limit=1')
      .then(response => response.json())
      .then(data => {
        console.log(data[0].content); // the quote text
        console.log(data[0].author);  // the quote's author

        this.props.setNewQuote({
          quote: data[0].content,
          author: data[0].author,
          color: color
        });
       
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });


    
  }

  render(){
    return (
      <div id="quote-box">
        <p id="text" style={{color: this.props.color}}><i id="quoteicon" className="fa fa-quote-left"></i>{this.props.quote}</p>
        <p id="author" style={{color: this.props.color}}>- {this.props.author}</p>
        <div id="twitterandbuttoncontainer">
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${this.props.quote}" - ${this.props.author}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                
                >
                <i className="fab fa-twitter button" id="twittericon" style={{backgroundColor: this.props.color}}></i>
            </a>
            <button id="new-quote" className="button" onClick={this.handleNewQuote} style={{backgroundColor: this.props.color}}>New Quote</button>

        </div>
      </div>
    ); 
  }
}

export default QuoteBox;
