import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

const bookings = [
  { name: 'White Room', title: 'Creative Tech Meeting', key: 'White-Room', description: 'Holds 16 people', availabileUntil: '5:30pm' },
  { name: 'Black Room', title: 'Whiteboard sesh', key: 'Black-Room', description: 'Holds 10 people', availabileUntil: '4:30pm' },
  { name: 'Yellow Room', title: 'Naptime', key: 'Yellow-Room', description: 'Holds 8 people', availabileUntil: '3:00pm' },
]

// TODO: Move into separate file
const Booking = ({ booking }) => (
  <View style={styles.booking}>
    <Text>3:00 - 4:00pm</Text>
    <Text>{ booking.title }</Text>
    <Text style={styles.roomName}>{ booking.name }</Text>
    <Text>{ booking.description }</Text>
  </View>
)

// TODO: rename
export default class BookingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Bookings</Text>
          <View style={styles.date}>
            <Text style={styles.dateText}>Tues 18</Text>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={bookings}
            renderItem={({item}) => <Booking booking={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  header: {
    flex: 1,
    marginBottom: 30,
  },
  body: {
    flex: 3,
  },
  title: {
    fontSize: 30,
    margin: 30,
    fontWeight: 'bold'
  },
  date: {
    flex: 1,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 20,
  },
  booking: {
    flex: 1,
    padding: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  roomName: {
    fontSize: 18,
  },
});
