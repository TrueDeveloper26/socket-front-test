import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {
  constructor(){
    super();
    this.state = {};
    this.socket = io.connect('http://localhost:3001');
  }

  componentDidMount(){
    this.socket.on('chat', data => {
      this.setState({ lol: data });
    });
  }


  handleHelloClick = () => {
    this.socket.emit('chat', {lol: "kek", kek: "lol"});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={this.handleHelloClick}>hello</button>

        <div>
          {this.state.lol && JSON.stringify(this.state.lol) }
        </div>

      </div>
    );
  }
}

export default App;
