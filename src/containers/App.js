import React, { Component } from "react";
import "./App.css";
import Person from "../components/Person/Person";
import CreatePersonForm from './CreatePersonForm/CreatePersonForm'

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
      },
      {
        name: "Ivaylo",
        age: 35,
        id:'asdf'
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
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1px solid grey",
      padding: "8px",
      cursor: "pointer"
    };

    const stl= {
      width: '60%',
      margin: '16px auto',
      border: '1px solid black',
      boxShadow: '0px 2px 3px #ccc',
      padding: '16px',
      textAlign: 'center',
  }

    let persons = null;

    if (this.state.buttonPushed) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
            style={stl}
            click ={() => this.deletePerson(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandelr(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes =[];

    if(this.state.person.length <=2){
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold')
    }

    return (
      
      <div className="App">
        <h1>Ivaylo</h1>
        <p className={classes.join(' ')}>React dev</p>
        <button style={style} onClick={this.triggerNameChange}>
          Change the Name
        </button>
        {persons}
        <CreatePersonForm />
      </div>
    );
  }
}

export default App;
