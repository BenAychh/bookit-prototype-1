import React from 'react';
import moment from 'moment'
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Modal } from 'react-native';
import Room from './Room.js'
import Button from './Button.js'
import Link from './Link.js'
import ActivityIndicator from './ActivityIndicator';
import TimePicker from './TimePicker';

// TODO: Indicate currently selected room.
// TODO: Default to first room in the list.
// TODO: Move button to bottom of screen.
// TODO: Need to remove lots of cruft. Comments, extra components.
// TODO: Need to fix styling.
// QUESTION: Should BookingForm or HomeScreen keep track of isRequestPending?

export default class BookingForm extends React.Component {
  constructor() {
    super()
    const start = moment()
    const end = start.clone().add(1, 'hour')
    this.state = {
      bookableId: null,
      bookingDuration: moment.duration(1, 'minute'), // TODO: Get rid of this.
      start,
      end,
      durationModalVisible: false,
      location: 'NYC',
    }
  }

  setModalVisible(isVisible) {
    this.setState({ durationModalVisible: isVisible })
  }

  render() {
    const { navigate, rooms, saveBooking, isRequestPending } = this.props

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, marginLeft: 30 }}>
          <Text style={{ fontSize: 30, marginBottom: 30, marginTop: 30, }}>I need a room in {this.state.location}.</Text>
          <View style={styles.timePickerSection}>
            <TimePicker
               label="Start"
               date={this.state.start}
               onDateChange={value => {
                 this.setState({ start: value })
               }}
               maximumDate={this.state.end}
             />
             <TimePicker
               label="End"
               date={this.state.end}
               onDateChange={value => {
                 this.setState({ end: value })
               }}
               minimumDate={this.state.start}
             />
          </View>

        </View>

        <View style={{ flex: 1 }}>
        <ActivityIndicator isActive={isRequestPending} />
        <Button
        label="Bookit"
        onPress={() => {
          // const start = moment()
          // const end = start.clone().add(1, 'hour')
          const booking = {
            bookableId: this.state.bookableId,
            start: this.state.start.toISOString(),
            end: this.state.end.toISOString(),
            subject: `Created: ${this.state.start.format()}`
          }
          saveBooking(booking)
        }}
        />
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={rooms}
            renderItem={({item}) => (
              <Room
                room={item}
                onPress={(bookableId) => {
                  this.setState({ bookableId })
                }}
              />
            )}
            keyExtractor={(item => item.id)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  timePickerSection: {
    flex: 1,
  },
  room: {
    flex: 1,
    flexDirection: 'row',
  },
  roomName: {
    fontSize: 18,
  },
  roomDescription: {
    fontSize: 10,
  },
  column: {
    flex: 1
  },
  linkText: {
    color: 'tomato'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    padding: 30,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
