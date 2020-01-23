import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image} from 'react-native';
import * as Service from '../service/ContactListService'
import { Input, Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
class PersonDetail extends Component {

    // componentDidMount(){
    //     this.personDetail();
    // }

    // personDetail(){
    //     const {dispatch} = this.props
    //     const id = this.props.navigation.getParam('id');
    //     console.log(id, 'ID Person')
    //     Service.findPersonById(id)
    //         .then((data) => {
    //             dispatch({type: 'FETCH_CONTACT_SUCCESS', loading: false, data: data});
    //         })
    //         .catch((error) => {
    //             dispatch({type: 'FETCH_CONTACT_ERROR', loading: false, data: error});
    //         })
    // }
    render() {
        // const {data, loading} = this.props
        const { navigation } = this.props;
        const data = navigation.getParam('row')
        return (
            <View style={styles.container}>
                <Appbar.Header style={{ backgroundColor: '#FFF' }}>
                    <Appbar.BackAction
                        onPress={() => { this.props.navigation.navigate("Home") }}
                    />
                    <Appbar.Content />
                    {/* <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
                </Appbar.Header>
                <View style={styles.card}>
                    
                    <Text>{data.firstName}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: hp('20$')
    }
})

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(PersonDetail);