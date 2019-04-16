import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentsList from './StudentsList';
import StudentEdit from './StudentEdit';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/students' exact={true} component={StudentsList}/>
            <Route path='/students/:id' component={StudentEdit}/>
          </Switch>
        </Router>
    )
  }
}
export default App;
