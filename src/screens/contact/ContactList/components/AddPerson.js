import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { TextInput, Appbar } from 'react-native-paper';
import { Avatar, Input} from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Services from '../../../../service/ContactListService'

class PersonDetail extends Component {

    handleSubmit = () => {
      Services.postContact(this.props.peopleReducer)
      setTimeout(() =>{this.props.navigation.navigate("Home")}, 1000)
    }

    onReFetch = () => {
      this.props.onFetch()
    }

    handlePhoto = (event) => {
      let data = event
      this.props.dispatch({ type: 'HANDLE_PHOTO', payload: data})
    }
    handleFirstname = (event) => {
      let data = event
      this.props.dispatch({ type: 'HANDLE_FIRSTNAME', payload: data})
    }
    handleLastname = (event) => {    
      let data = event
      this.props.dispatch({ type: 'HANDLE_LASTNAME', payload: data})
    }
    handleAge = (event) => {
      let data = event
      this.props.dispatch({ type: 'HANDLE_AGE', payload: Number(data) })
    }

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('row')
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.container}>
                <Appbar.Header style={{ backgroundColor: '#FFF' }}>
                    <Appbar.BackAction
                        onPress={() => { this.props.navigation.navigate("Home") }}
                    />
                    <Appbar.Content/>
                    <Appbar.Action />
                    <Appbar.Content title="Save" style={{marginLeft: wp('30%')}} onPress={this.handleSubmit}/>
                </Appbar.Header>
                <View style={styles.avatar}>
                    <Avatar rounded
                        size={200}
                        />
                </View>
                <View style={{margin: 10}}>
                <TextInput
                  label='Photo URL'
                  onChangeText={this.handlePhoto}
                />
                <TextInput
                  label='First Name'
                  onChangeText={this.handleFirstname}
                />
                <TextInput
                  label='Last Name'
                  onChangeText={this.handleLastname}
                />
                <TextInput
                  label='Age'
                  onChangeText={this.handleAge}
                />
                </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: hp('5%')
    },
    avatar: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: hp('5%')
  },
})

const mapStateToProps = (state) => {
  return {
    peopleReducer: state.peopleReducer.formContact
  }
}

export default connect(mapStateToProps)(PersonDetail);