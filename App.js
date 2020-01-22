import React, { Component } from 'react';
import Navigator from './src/screens/Navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers/ContactReducer'


export default class App extends Component {
  render() {
    return (
      <StoreProvider store={createStore(reducers)}>
      <PaperProvider>
        <Navigator/>
      </PaperProvider>
      </StoreProvider>
    )
  }
}
