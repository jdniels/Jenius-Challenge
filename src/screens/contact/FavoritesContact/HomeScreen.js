import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';

export default class HomeScreen extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
    <View> 
        <Text>Hello</Text>
        <FAB
          style={styles.fab}
          medium
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
  },
})