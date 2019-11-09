import React from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output'

class App extends React.Component {
  state = {
    name: "Ivaylo",
    age: 35
  }

  nameHandler = (event) => {
    this.setState(
      {
        name: event.target.value,
        age: 35
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Input changed={this.nameHandler}/>
        <Output 
        name={this.state.name} 
        age={this.state.age}
        />
        <Output />
        <Output />
      </div>
    )
  }
}

export default App;
