import React, { Component } from 'react';
import {Provider,connect} from 'react-redux';
import configureStore from './store/Store';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import AppNavigator from "./Components/Home/XMGhome2"

const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}