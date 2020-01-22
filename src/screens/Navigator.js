import React, { Component } from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './contact/FavoritesContact/HomeScreen' 
import ContactList from './contact/ContactList/components/ContactList'

const tabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: 'Favorites',
          tabBarIcon: ({tintColor}) =>(
            <View>
              <Icon name={'ios-star'} style={{color: tintColor}} size={25} />
            </View>
          )
        },
    },
    ContactList: {
      screen: ContactList,
      navigationOptions:{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({tintColor}) =>(
          <View>
            <Icon name={'ios-contact'} style={{color: tintColor}} size={25}/>
          </View>
        )
      },
    },
},{
    initialRouteName: 'ContactList',
    activeColor: '#3fc5f0',
    inactiveColor: '#000',
    barStyle: {backgroundColor : '#EAEAEA'},
}
)


export default createAppContainer(tabNavigator);