import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PlaceCard from './components/PlaceCard'


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <main>
        <Switch>

          {/* <Route exact path='/' render={(props) => <Home text="Add Alert" {...props} />} /> */}
          <Route exact path='/test' render={(props) => <PlaceCard locale="ru" {...props} />} />


        </Switch>
      </main>
    );
  }
}

export default App;
