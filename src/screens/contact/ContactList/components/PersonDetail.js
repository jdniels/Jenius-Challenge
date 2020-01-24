import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Text} from 'react-native';
import { Avatar, Input} from 'react-native-elements';
import { Appbar, FAB, TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Service from '../../../../service/ContactListService'
class PersonDetail extends Component {
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('row')
        const umur = data.age.toString();
        console.log(umur, 'UMUR LOE');
        return (
            <>
            <View style={styles.container}>
                <Appbar.Header style={{ backgroundColor: '#FFF' }}>
                    <Appbar.BackAction
                        onPress={() => { this.props.navigation.navigate("Home") }}
                    />
                    <Appbar.Content />
                </Appbar.Header>
                <View style={styles.card}>
                    <Avatar rounded
                        source={{uri : data.photo}}
                        size={200}
                        />
                </View>
                <View style={styles.textInput}>
                <TextInput
                    disabled={true}
                    label='First Name'
                    defaultValue={data.firstName}/>
                <TextInput
                    disabled={true}
                    label='Last Name'
                    defaultValue={data.lastName}/>
                <TextInput
                    disabled={true}
                    label='Age'
                    defaultValue={umur}/>
                </View>
            </View>
            <FAB
                theme='white'
                style={styles.fab}
                label="Edit Contact"
                icon="pencil"
                onPress={() => { this.props.navigation.navigate("EditContact", {row: data})}}
            />
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