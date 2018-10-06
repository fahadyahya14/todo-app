import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Data from './components/show';
import { getUserData } from './config/helper';
class App extends Component {
  constructor() {
    super();

    this.state = {
      user1: '',
      user2: '',
      Data:{},
      Dat:{},
      isDone: false,
    };
  }

  onInputHandler = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  
  reStart = () => {
    this.setState({
      isDone: false,
    });
  };
  getUserDataHandler = event => {
    event.preventDefault();

    if (this.state.user1 === '' || this.state.user2 === '') {
      alert('Please fill this form');
      return;
    }
    const usersData = Promise.all([
      getUserData(this.state.user1),
      getUserData(this.state.user2),
    ]);

    usersData
      .then(res => {
        this.setState({
          isDone: true,Dat:res})
        // total 
        //following
        //follower
        //public_repos
        //public_gists

     const fah =  res
    localStorage.setItem("fah",JSON.stringify(fah))
    console.log(this.state.Dat,fah);

    })
      .catch(error => console.log(error));

      console.log(this.state);
  };
  render() {
    if (this.state.isDone) {
      return (
        <div>
          <Data fah={this.state.Dat} boool={this.state.isDone} />
          <Button text="Rematch" onClick={this.reStart} className='btn btn-danger' />
        </div>
      );

    }

    return (
      <div className="App">
        <form onSubmit={this.getUserDataHandler}>
          <Input
            name="user1"
            inputHandler={this.onInputHandler}
            value={this.state.user1}
            label="User 1"
            placeholder="User 1 Name"
          />
          <Input
            name="user2"
            inputHandler={this.onInputHandler}
            value={this.state.user2}
            label="User 2"
            placeholder="User 2 Name"
          />
          <Button text="Submit" className="btn btn-primary" />
        </form>
        <div className="example">For example: (mtahir08, MOHAMMADArsalan,fahadyahya14)</div>

      
      
      </div>
    );
  }

}




export default App;
