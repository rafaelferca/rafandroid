import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TextResult extends Component {
  render() {
    return (
      <View>
       <View style={{marginBottom: 16}}>
         <Button
          title="What time is it ?"
          onPress={this.props.showmetime}/>
        </View>
         <View style={{marginBottom: 16}}>
        <Button
          title="Get My GEO Info"
          onPress={this.props.getgeoinfo}/>
        </View>
        <View style={{marginBottom: 16}}>
        <Button
          title="Get My phone company"
          onPress={this.props.getcarrier}/>
        </View>
        <View style={{marginBottom: 16}}>
        <Button
          title="Get My device country"
          onPress={this.props.getdevicecountry}/>
        </View>
        <View style={{marginBottom: 16}}>
         <Button
           title="Show Api Level"
           onPress={this.props.getapilevel}/>
         </View>

        <Text
          style={styles.textResult}>
          {this.props.theresult}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textResult: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0b12a1'
  }
});