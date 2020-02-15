import React, {Component} from 'react';

import InputText from '../../components/inputText/InputText'
import './CreatePersonForm.css';

class CreatePersonForm extends Component{
    state={
        person: [
            {
                name:'',
                age:0,
                id:0
            }
        ]
    }

    nameChangeHandler = (event) => {
        let updatedPerson = this.state.person;
        updatedPerson[0].name = event.target.value;

        this.setState({
            person:updatedPerson
        })
    }

    ageChangeHandler = (event) =>{
        let updatedPerson = this.state.person;
        updatedPerson[0].age = event.target.value;

        this.setState({
            person: updatedPerson
        })
    }

    idChangeHandler = (event) => {
        let updatedPerson = this.state.person;
        updatedPerson[0].id = event.target.value;

        this.setState({
            person: updatedPerson
        })
    }

    handleSubmit = (event) => {
        alert('The user' + this.state.person[0].name + 'has been added')
        alert(this.state.person[0].age)
        event.preventDefault();
    }

    render(){
        return(
            <div className='formStyles'>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <InputText 
                    inputTitle='Name'
                    changed={(event)=> this.nameChangeHandler(event)}
                />
                <InputText
                    inputTitle='Age'
                    changed={(event) => this.ageChangeHandler(event)}
                />
                <InputText
                    inputTitle='Id'
                    changed = {(event) => this.idChangeHandler(event)}
                />
                <button type='submit' value='Add New Person'>Add New Person</button>
                </form>
            </div>
        )
    }    
}

export default CreatePersonForm;