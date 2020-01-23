import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux'
import { createStackNavigator } from 'react-navigation-stack';
import ContactList from './src/screens/contact/ContactList/components/ContactList'
import PersonDetails from './src/screens/contact/ContactList/components/PersonDetail'
import AddPerson from './src/screens/contact/ContactList/components/AddPerson'
import store from './src/redux/store'

const AppNavigator = createStackNavigator({
  Home: { screen: ContactList },
  PersonDetail: { screen: PersonDetails },
  AddContact: { screen: AddPerson }
}, {
  headerMode: 'none'
});

const AppContaineOne = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <AppContaineOne />
        </PaperProvider>
      </StoreProvider>
    )
  }
}
