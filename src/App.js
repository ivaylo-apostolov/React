import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import { ReactComponent } from '*.svg';

class App extends Component {
  state = {
    person: [
      {
        name: "Ivaylo",
        age: 35
      },
      {
        name: "Toma",
        age: 32
      }
    ],
    otherPersons: [
      {
        name: "Goshko",
        age: 21
      }
    ]
  }

  changeNameHandler = (newName) => {
    this.setState({
      otherPersons: [
        {
          name: newName,
          age: 34
        }
      ]
    })
  }

  nameChangeHandelr = (event) => {
    this.setState({
      person: [
        {
          name: event.target.value,
          age: 35
        },
        {
          name: "Toma",
          age: 32
        }
      ]})
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid grey",
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Ivaylo</h1>
        <p>React dev</p>
        <button 
        style={style}
        onClick={this.changeNameHandler.bind(this, "Gogo")}>Change the Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          changed={this.nameChangeHandelr}>Hobby: tapout
        </Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          
        />
        <Person
          name={this.state.otherPersons[0].name}
          age={this.state.otherPersons[0].age}
          click={this.changeNameHandler.bind(this, "Gogo")}
        />
      </div>
    )
  }
}

export default App;
