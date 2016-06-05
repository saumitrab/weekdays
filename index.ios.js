import React, { Component } from 'react';
import Moment from 'moment';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';

// create a react component
class Weekdays extends Component {
  render() {
  return (<View style={styles.container}>
      {this.days()}
    </View>);
  }
  days() {
    let daysItems = [];
    for (let i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
          <DayItem day={day} daysUntil={i} />
          );
    }

    return daysItems;
  }
}

// Style the React Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', // Y Axis. [flex-end, flex-start]
    alignItems: 'center' // X Axis
  }
});


// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays;
});
