
import { Component } from 'react';
import './App.css';
import Semilore from './Person/Person'

class App extends Component  { 

  state = {
    persons: [
      { name: 'PHILZ', age: 12 },
      { name: 'ANU', age: 77 },
      { name: 'JOL', age: 7 },
    ],
    showPersons = false
  }

  switchNameHandler = (newName) =>{
    this.setState(
    {
      persons: [
        { name: 'TIMOTHY', age: 21  },
        { name: 'adun', age: 3 },
        { name: newName, age: 79 },
      ],
    }
    )
  }
 nameChangedHandler = (event) =>{
  this.setState(
    {
      persons: [
        { name: 'TIMOTHY', age: 21  },
        { name: event.target.value, age: 3 },
        { name: 'ADUN', age: 79 },
      ],
    }
    )
 }

 showPersonsHandler = () =>{
  const doesShow = this.state.showPersons
  this.setState({
    showPersons: !doesShow
  })
 }
 deletePersonHandler = (personIndex) =>{
  const osas = this.state.persons.splice();
  osas.splice(personIndex, 1)
  this.setState({
    osas: osas
  })
 }

  render() {
    const myStyle= style{
      backgroundColor: 'red',
      color: 'white'
    }
    
    let classes= []

    if(this.state.persons.length <=2){
      classes.push('red')
    }
    if(this.state.persons.length <=1){
      classes.push('bold')
    }
    if(this.state.persons.length <1){
      classes.push('wahala')
    }
    
    let people = null

    if (this.state.showPersons) {
      people =(
        <div>
          {this.state.persons.map((pesin, index) =>{
            return <Semilore
            clicked = {()=>this.deletePersonHandler(index)}
            name = {pesin.name}
            age = {pesin.age}
            />
          })}
        </div>
      )
      myStyle.backgroundColor= 'green'
    }
  
  return(
    <div className='Apps'>
      <h1>Hi, I am a React Developer</h1>
     <p style{classes.join(' ')}> And i'm the happiest lonely man i know </p>
      <button onClick = {this.showPersonsHandler} >SWITCH NAME</button>
    </div>
  )
}
}

export default App;
 
