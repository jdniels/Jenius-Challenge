import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Avatar, Input} from 'react-native-elements';
import { Appbar, FAB, TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Service from '../../../../service/ContactListService'
class PersonDetail extends Component {
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('row')
        const umur = data.age.toString();
        return (
            <>
            <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: '#FFF' }}>
                    <Appbar.BackAction
                        onPress={() => { this.props.navigation.navigate("Home") }}
                    />
                    <Appbar.Content/>
                    <Appbar.Action />
                    <Appbar.Content title="Save" style={{marginLeft: wp('30%')}} onPress={() => { this.props.navigation.navigate("PersonDetail") }}/>
                </Appbar.Header>
                <View style={styles.card}>
                    <Avatar rounded
                        source={{uri : data.photo}}
                        size={200}
                        />
                </View>
                <View style={styles.textInput}>
                <TextInput
                    label='First Name'
                    defaultValue={data.firstName}/>
                <TextInput
                    label='Last Name'
                    defaultValue={data.lastName}/>
                <TextInput
                    label='Age'
                    defaultValue={umur}/>
                </View>
            </View>
            </>
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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
    textInput: {
        margin: wp('2%'),
    }
})

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(PersonDetail);