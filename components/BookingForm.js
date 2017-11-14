import React from 'react';
import moment from 'moment'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import Room from './Room.js'
import Button from './Button.js'
import Link from './Link.js'
import ActivityIndicator from '../components/ActivityIndicator';

// TODO: Make time length pickable. Make that text larger.
// TODO: Move button to bottom of screen.
// QUESTION: Should BookingForm or HomeScreen keep track of isRequestPending?

export default class BookingForm extends React.Component {
  constructor() {
    super()
    this.state = {
      bookableId: null,

    }
  }

  render() {
    const { navigate, rooms, saveBooking, isRequestPending } = this.props

    return (
      <View style={styles.container}>
        <View style={{ flex: 1.3 }}>
          <View style={{ flex: 1 }}>
            <ActivityIndicator isActive={isRequestPending} />
            <Button
              label="Bookit"
              onPress={() => {
                const start = moment()
                const end = start.clone().add(1, 'minute')
                const booking = {
                  bookableId: this.state.bookableId,
                  start: start.clone().toISOString(),
                  end: end.toISOString(),
                  subject: `Created: ${start.toISOString()}`
                }
                saveBooking(booking)
              }}
            />
          </View>
          <View style={styles.section}>
            <Text>I need a room right now for: <Text style={styles.linkText}>1 minute</Text></Text>
          </View>
        </View>

        <View style={{ flex: 2 }}>
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
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    padding: 30,
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
