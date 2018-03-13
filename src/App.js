import React, { Component } from 'react';
import Ranking from './components/Ranking'
import './App.css';
import store from './reducers/store'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Ranking/>
      </Provider>
    );
  }
}

export default App;
