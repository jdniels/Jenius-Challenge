import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Services from '../../../../service/ContactListService'

class PersonDetail extends Component {

    handleSubmit = () => {
      Services.postContact(this.props.peopleReducer)
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
                    <Appbar.Content />
                    <Appbar.Action icon="save" onPress={this.handleSubmit} />
                </Appbar.Header>
                <View style={{margin: 10}}>

                <TextInput
                  label='Photo URL'
                  mode="outlined"
                  // value={this.state.text}
                  onChangeText={this.handlePhoto}
                />
                <TextInput
                  label='First Name'
                  mode="outlined"
                  // value={this.state.text}
                  onChangeText={this.handleFirstname}
                />
                <TextInput
                  label='Last Name'
                  mode="outlined"
                  // value={this.state.text}
                  onChangeText={this.handleLastname}
                />
                <TextInput
                  label='Age'
                  mode="outlined"
                  // value={this.state.text}
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
    }
})

const mapStateToProps = (state) => {
  return {
    peopleReducer: state.peopleReducer.formContact
    // ...state
  }
}

export default connect(mapStateToProps)(PersonDetail);