import React, { Component, Fragment } from 'react';

import MonthView from './components/MonthView';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>
            React Redux Calendar
          </h1>
        </header>
        <main>
          <MonthView />
        </main>
      </Fragment>
    );
  }
}

export default App;
