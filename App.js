import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers/ContactReducer'
import { createStackNavigator } from 'react-navigation-stack';
import ContactList from './src/screens/contact/ContactList/components/ContactList'
import PersonDetails from './src/screens/contact/ContactList/components/PersonDetail'
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';


const AppNavigator = createStackNavigator({
  Home: {screen : ContactList},
  PersonDetail : {screen : PersonDetails}
},{
  headerMode : 'none'
});

const AppContaineOne = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={createStore(reducers)}>
        <PaperProvider>
          <AppContaineOne/>
        </PaperProvider>
      </StoreProvider>
    )
  }
}
