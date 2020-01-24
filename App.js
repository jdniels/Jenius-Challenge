import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux'
import { createStackNavigator } from 'react-navigation-stack';
import ContactList from './src/screens/contact/ContactList/components/ContactList'
import PersonDetails from './src/screens/contact/ContactList/components/PersonDetail'
import AddPerson from './src/screens/contact/ContactList/components/AddPerson'
import EditContact from './src/screens/contact/ContactList/components/EditContact'
import store from './src/redux/store'

const AppNavigator = createStackNavigator({
  Home: { screen: ContactList },
  PersonDetail: { screen: PersonDetails },
  AddContact: { screen: AddPerson },
  EditContact: { screen: EditContact}
}, {
  headerMode: 'none'
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#617be3',
    accent: '#007bff',
  },
};

const AppContaineOne = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <AppContaineOne />
        </PaperProvider>
      </StoreProvider>
    )
  }
}
