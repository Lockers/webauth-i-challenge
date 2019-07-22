import React from 'react';
import axios from 'axios';


class App extends React.Component {


  login = (loginStuff) => {
    axios
      .post('http://localhost:5000/api/login', loginStuff)
      .then(response => {
        console.log(response)
      })
  }
  eventHandler = (event) => {
    event.preventDefault()
    const username = event.target['username'].value
    const password = event.target['password'].value

    const loginCreds = {
      username: username,
      password: password
    }
    console.log(loginCreds)
    this.login(loginCreds)
}

  render() {
    return (
      <div className="App">
        <form onSubmit={this.eventHandler}>
          <input
            type='text'
            name='username'
          />
          <input
            type='text'
            name='password'
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default App;
