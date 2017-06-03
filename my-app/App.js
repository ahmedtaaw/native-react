import React , {Component} from 'react';
import { AppRegistry,StyleSheet, Text, TextInput,View } from 'react-native';

import Component1 from'./app/components/Component1/Component1';

export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Component1 message="HELLO MSG"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },big:{
    fontWeight: 'bold',
    fontSize: 30,
  }
  });
AppRegistry.registerComponent('myapp',()=>myapp);
