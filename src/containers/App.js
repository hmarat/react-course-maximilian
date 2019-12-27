import React, { Component } from 'react';

import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("[App.js] constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  state = {
    persons: [
      { id: 0, name: "Marat", age: 20 },
      { id: 1, name: "Vardan", age: 21 },
      { id: 2, name: "David", age: 22 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    this.setState(({ showPersons }) => ({
      showPersons: !showPersons
    }))
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex], name: event.target.value };

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(() => ({
      persons
    }))
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState(() => ({ persons }))
  }

  render() {
    console.log("[App.js] rendered")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
