import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import classes from './App.module.css';

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
        <Layout>
          <h2>Hello World</h2>
          <BurgerBuilder/>
          <input type="text" onChange={this.clicked} />
          <p>Enterd Value : {this.state.input}</p>
        </Layout>
      </div>
    );
  }

}

export default App;
