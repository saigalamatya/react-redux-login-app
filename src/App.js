import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
