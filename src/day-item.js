// Imports
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

//Create components
class DayItem extends Component {
  render() {
    return (<Text style={this.style()}>
        {this.props.day}
      </Text>);
  }
  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }
  color() {
    var opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, '+ opacity.toString()  +')'; 
  }
  fontWeight() {
    var weight = 7 - this.props.daysUntil;
    return (weight * 100).toString() ;
  }
  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }
  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
}

//Style compoents 
//const styles = StyleSheet.create({
//  day: {
//    fontSize: 18,
//    color: '#000FFF'
//  }
//});

//Make this code available 
module.exports = DayItem;
