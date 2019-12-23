import React, { Component } from 'react';
import styled from "styled-components"

import Person from "./Person/Person"
import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? "red" : "green"};
  color: white;
  border: 1px solid blue;
  padding: 8px;
  font: inherit;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.alt ? "salmon" : "lightgreen"};
    color: black;
  }
`

class App extends Component {
  state = {
    persons: [
      {id: 0, name: "Marat", age: 20},
      {id: 1, name: "Vardan", age: 21},
      {id: 2, name: "David", age: 22}
    ],
    showPersons: false
  }
  
  togglePersonsHandler = () => {
    this.setState(({showPersons}) => ({
      showPersons: !showPersons
    }))
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex], name: event.target.value};

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(() => ({
      persons
    }))
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState(() => ({persons}))
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              change={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      )

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "",
      //   color: "black"
      // }
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push("red");
    }
    if(this.state.persons.length <= 1){
      classes.push("bold");
    }

    return (
        <div className="App">
          <h1>Hello, I am a react component</h1>
          <p className={classes.join(" ")}>This is really working</p>
          <StyledButton onClick={this.togglePersonsHandler} alt={this.state.showPersons}>Switch Person</StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;
