import React from 'react';
import { View, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux'
import * as Service from '../service/ContactListService'
import { createFilter } from "react-native-search-filter";
import FAB from 'react-native-fab'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatList, Item } from 'react-native';
import { contacts } from '../../../../redux/action/peopleReducer'

const KEY_TO_FILTER = ['firstName', 'lastName']
class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      spinner: false
    }
  }
  
  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople = async () => {
    await this.props.dispatch(contacts())
  }

  onRefresh = () => {
    this.fetchPeople()
  }
  peopleSort = () => {
    const filterPerson = this.props.peopleReducer.data.data.filter(createFilter(this.state.keyword, KEY_TO_FILTER)).sort((a, b) => {
      let peopleA = a.firstName.toUpperCase();
      let peopleB = b.firstName.toUpperCase();
      return (peopleA < peopleB) ? -1 : peopleA > peopleB ? 1 : 0
  });
  return filterPerson;
  }
  

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('PersonDetail', { row: item }) }}>
        <ListItem
          key={index}
          leftAvatar={{ source: { uri: item.photo } }}
          title={item.firstName + " " + item.lastName}
          bottomDivider
        />
      </TouchableOpacity>
    )
  }

  render() {
    if(this.props.peopleReducer.isLoading){
      return (
        <>
          <View style={{ backgroundColor: '#FFF' }}>
            <Searchbar style={{ margin: 10, borderRadius: 10 }}
              placeholder="Search"
              onChangeText={(keyword) => this.setState({keyword}) }
            />
          </View>
          <View>
            <FlatList
              data={this.peopleSort()}
              keyExtractor={(res, index) => res.id} 
              renderItem={this.renderItem}
            />
          </View>
          <FAB onClickAction={() => this.props.navigation.navigate("AddContact")}/>
        </>
      )
    }else {
      return (
        <View style={{flex:1, justifyContent:"center"}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
})

const mapStateToProps = (state) => {
  return {
    peopleReducer: state.peopleReducer
  }
}

export default connect(mapStateToProps)(ContactList)