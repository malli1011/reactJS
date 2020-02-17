import React, { Component } from 'react';
import './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id:"1", name: 'Max', age: 28 },
      {id:"2", name: 'Manu', age: 29 },
      {id:"3", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (id)=>{
   // old way of copying array   
   // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(id,1);
    this.setState({persons:persons})
  }

    
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>p.id===id);
    const tempPerson =this.state.persons[personIndex];
    const person ={...tempPerson};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
   let persons = null;

    if ( this.state.showPersons ) {
      persons = 
          <Persons persons = {this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}></Persons>
       
    }

    return (
      <div className="App">
        <Cockpit toggle={this.togglePersonsHandler}></Cockpit>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
