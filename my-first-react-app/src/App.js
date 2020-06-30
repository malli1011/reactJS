import React, { Component } from 'react';
import classes from './App.module.css'

class App extends Component {
  state = {
    input: ''
  }
  clicked = (event) => {
    const val = event.target.value;
    this.setState({ input: val })
  }

  render() {
    return (
      <div className={classes.App}>
        <h2>Hello World</h2>
        <input type="text" onChange={this.clicked} />
        <p>Enterd Value : {this.state.input}</p>
      </div>
    );
  }

}

export default App;
