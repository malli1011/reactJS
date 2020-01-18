import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/validation';
import Char from './Char/Char'

class App extends Component{

  state = {
    input:''
  };

 changeHandler = (event)=>{
    const i = event.target.value;
    this.setState({input:i})
    this.setState({length:i.length})
}

  deleteHandler(index){
    let tempArray = this.state.input.split('');
    tempArray.splice(index,1);
    this.setState({input:tempArray.join(''),length:tempArray.length})
  }

  render(){
    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value = {this.state.input}/>
        <p>{this.state.length}</p>
        <Validation inputLength={this.state.length}></Validation>
        {this.state.input.split('').map((char, index)=>{
          return(<Char key={index} char={char} ondelete={()=> this.deleteHandler(index)}></Char>)
          })
         }
      </div>
    );
  }
  
}

export default App;
