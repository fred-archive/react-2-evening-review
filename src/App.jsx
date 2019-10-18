import React from 'react'
import './App.css'
import People from './People'
import axios from 'axios'

export default class App extends React.Component{
  constructor(){
    super()

    this.state = {
      people : [],
      gender: '', 

    }
    // this.getAllPeople = this.getAllPeople.bind(this)
  }

  getAllPeople(){
    axios.get('./api/people').then(res => {
      this.setState({people: res.data})
    })
  }

  render(){
    const {people} = this.state
    return(
      <div className='outer-app'>
        <div className='nav'></div>
          <button onClick={()=>this.getAllPeople()}>Get All People</button>
          <button>Females</button>
          <button>Males</button>
          <div>
            <input type="text"/>
            <button>Submit Country</button>
            <input type="text"/>
            <button>Submit Genre</button>
          </div>
        <div className='App'>
          {people.map(people => (
            <People key={people.id} data={people}/>
          ))}
        </div>
      </div>
    )
  }
}