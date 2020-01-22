import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Searchbar } from 'react-native-paper';
import {connect} from 'react-redux'
import {contact} from '../service/ContactListService'
import {FETCH_CONTACTS} from '../action/ContactAction'
// import { Container } from './styles';


class ContactList extends React.Component {
  
  componentDidMount(){
    this.fetchContacts();
  }

  fetchContacts = async () => {
    const response = await contact();
    console.log(response)
    this.props.dispatch({...FETCH_CONTACTS, payload: response})
  }

  render() {
    return (
    <View> 
        <Searchbar
        placeholder="Search"
        // onChangeText={query => { this.setState({ firstQuery: query }); }}
        // value={firstQuery}
      />
        <ScrollView>
          {
            
          }
        </ScrollView>
    </View>)
  }
}

function mapStateToProps(state) {
  return {...state}
}

export default connect(mapStateToProps)(ContactList)