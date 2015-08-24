import React from 'react';

var defaultFormat = /(\d{1,4})/g;
let cards = [
  {
    type: 'discover',
    pattern: /^(6011|65|64[4-9]|622)/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3]
  },
  {
    type: 'mastercard',
    pattern: /^5[1-5]/,
    format: defaultFormat,
    length: [16],
    cvcLength: [3]
  },
  {
    type: 'amex',
    pattern: /^3[47]/,
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    length: [15],
    cvcLength: [3, 4]
  },
  {
    type: 'visa',
    pattern: /^4/,
    format: defaultFormat,
    length: [13, 14, 15, 16],
    cvcLength: [3]
  },
  {
    type: 'diners_club',
    pattern: /^(36|38|30[0-5])/,
    format: defaultFormat,
    length: [14],
    cvcLength: [3]
  }
];

var cardFromNumber = function(num){
  num = (num + "").replace(/D/g, "");
  for (var i = 0; i < cards.length; i++){
    var n = cards[i];
    if (n.pattern.test(num)) return n;
  }
}

let CardInput = React.createClass({
  getInitialState() {
    return {
      cardNum: ''
    }
  },

  render(){
    return (
      <div className="creditCard">
        <h1>Credit Card</h1>
          <input
              type="text"
              onChange={(event)=>
              this.handleChange(event)}
              placeholder="• • • •   • • • •   • • • •   • • • •"/>

            {this.state.cardNumber && <p classname="card-type">{this.state.cardType}</p>}
      </div>
    );
  },

  handleChange(event) {
    this.setState({value: event.target.cardNum});
  },
});

let AppComponent = React.createClass({

  render() {
    return (
      <div>
        <CardInput sendChange={this._updateValue}/>
      </div>
    )
  }
});

React.render(
  <AppComponent />
  document.getElementById("app"));
