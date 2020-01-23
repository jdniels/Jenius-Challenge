import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image} from 'react-native';
import { Avatar, Divider, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class PersonDetail extends Component {

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('row')
        return (
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
                    <Text style={{fontSize: 26, marginLeft: 10}}>{data.firstName + " " + data.lastName}</Text>
                <Divider/>
            </View>
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

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(PersonDetail);