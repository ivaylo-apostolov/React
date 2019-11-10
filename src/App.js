import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
//import { ReactComponent } from '*.svg';

class App extends Component {
  state = {
    person: [
      {
        name: "Ivaylo",
        age: 35,
        id:'asdf'
      },
      {
        name: "Toma",
        age: 32,
        id:'jlkjlkj'
      }
    ],
    otherPersons: [
      {
        name: "Goshko",
        age: 21,
        id:'jlkjlkj'
      }
    ],
    buttonPushed: false
  };

  deletePerson = (personIndex) => {
    let updatedPersons = this.state.person;
    updatedPersons.splice(personIndex, 1);
    this.setState({person: updatedPersons})
  }

  nameChangeHandelr = (event, id) => {
    const personIndex = this.state.person.findIndex(p => p.id === id)
    let person = {...this.state.person[personIndex]};
    person.name = event.target.value;
    const personsArr = [...this.state.person];
    personsArr[personIndex] = person;

    this.setState({
      person:personsArr
    });
  };

  triggerNameChange = () => {
    this.setState({
      buttonPushed: !this.state.buttonPushed
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid grey",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.buttonPushed) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
            click ={() => this.deletePerson(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandelr(event, person.id)}
            />
          })
          }
          {this.state.otherPersons.map(person => {
            return <Person 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandelr2(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Ivaylo</h1>
        <p>React dev</p>
        <button style={style} onClick={this.triggerNameChange}>
          Change the Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
