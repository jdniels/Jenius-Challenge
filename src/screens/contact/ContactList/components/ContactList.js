import React from 'react';
import { View, ActivityIndicator, TouchableOpacity, Alert, RefreshControl, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux'
import { createFilter } from "react-native-search-filter";
import FAB from 'react-native-fab'
import { FlatList } from 'react-native';
import { contacts } from '../../../../redux/action/peopleReducer'
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Service from '../../../../service/ContactListService'

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
  onDelete = (id) => {
    Service.deleteContact(id)
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
    const rightButtons = [
      <TouchableOpacity onPress={() => {this.onDelete(item.id)}}>
      <View style={{justifyContent: 'center', padding: 25, backgroundColor: 'red', margin: 'auto'}}>
          <Icon name="ios-trash" size={35} color="white"/>
      </View>
      </TouchableOpacity>
    ];
    return (
      <Swipeable rightButtons={rightButtons}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('PersonDetail', { row: item }) }}>
        <ListItem
          key={index}
          leftAvatar={{ source: { uri: item.photo } }}
          title={item.firstName}
          subtitle={item.lastName}
          bottomDivider
        />
      </TouchableOpacity>
      </Swipeable>
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
          <View style={{flex: 1}}>
            <FlatList
              refreshControl={<RefreshControl onRefresh={this.onRefresh}/>}
              data={this.peopleSort()}
              keyExtractor={(res, index) => res.id} 
              renderItem={this.renderItem}
            />
          </View>
          <FAB buttonColor="blue" onClickAction={() => this.props.navigation.navigate("AddContact")}/>
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


const mapStateToProps = (state) => {
  return {
    peopleReducer: state.peopleReducer
  }
}

export default connect(mapStateToProps)(ContactList)