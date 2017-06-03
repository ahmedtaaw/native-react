import React , {Component} from 'react';
import { AppRegistry,StyleSheet, Text, TextInput,View } from 'react-native';

export default class Component1 extends Component {
  constructor (){
    super();
    this.state={
      name:'Brad',
      showName:false
    }
  }
  render() {
    let name = this.state.showName?this.state.name:'No name';
    return (
      <View>
        <Text style={[styles.big]}>{this.props.message}</Text>
        <Text>{name}</Text>
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
  },
  red:{
    color: 'red',
  }
});
 AppRegistry.registerComponent('Component1', ()=>Component1);