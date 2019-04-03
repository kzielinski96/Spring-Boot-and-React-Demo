import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    students: []
  };

  async componentDidMount() {
    const response = await fetch('api/students');
    const body = await response.json();
    this.setState({ students: body, isLoading: false });
  }
  render() {
    const { students, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Students List</h2>
            {students.map(student => (
              <div key={student.id}>{student.name}</div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
