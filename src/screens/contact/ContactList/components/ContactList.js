import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Searchbar } from 'react-native-paper';
import {connect} from 'react-redux'
import * as Service from '../service/ContactListService'
import {createFilter} from "react-native-search-filter";
import FAB from 'react-native-fab'
import Icon from 'react-native-vector-icons/Ionicons'

const KEY_TO_FILTER = ['firstName', 'lastName']
class ContactList extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        searchPeople : ''
      }
  }

  searchByCriteria = (key) => {
    this.setState({searchPeople: key})
  }

  reFetch = () =>{this.fetchPeople()}

  componentDidMount(){
    this.fetchPeople();
  }

  fetchPeople(){
    const {dispatch, loading} = this.props
    console.log("COntact")
    if(!loading){
      dispatch({type: 'FETCH_CONTACT', data: [], loading: true});
      Service.Contacts()
        .then(data => {
          dispatch({type: 'FETCH_CONTACT_SUCCESS', loading: false, data: data});
        })
        .catch((error) => {
          dispatch({type: 'FETCH_CONTACT_ERROR', loading:false, error: error, data: []});
        })
    }
  }

  render() {
    const {data, loading} = this.props
    const filteredPerson = data.filter(createFilter(this.state.searchPeople, KEY_TO_FILTER)).sort((a, b) => {
      let peopleNameA = a.firstName.toUpperCase();
      let peopleNameB = b.firstName.toUpperCase();
      return (peopleNameA < peopleNameB) ? -1 : peopleNameA > peopleNameB ? 1:0;
    })
    return (
      <>
    <View style={{backgroundColor: '#FFF'}}> 
        <View>
          <Searchbar style={{ margin: 10, borderRadius: 10}}
          placeholder="Search"
          onChangeText={(key) => this.searchByCriteria(key)}
          />
        </View>
        <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={this.reFetch}/>}>
         {
           filteredPerson.map((people, index) => {
             return (
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('PersonDetail')}}>
                <ListItem
                key={index}
                leftAvatar={{ source: { uri: people.photo } }}
                title={people.firstName + " " + people.lastName}
                bottomDivider
              />
              </TouchableOpacity>
             )
           })
         }
        </ScrollView>
    </View>
    <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => {this.props.navigation.navigate('PersonDetail')}} visible={true} iconTextComponent={<Icon name="ios-add"/>} />
    </>
    )
  }
}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps)(ContactList)