import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

const rooms = [
  { name: 'White Room', key: 'White-Room', description: 'Holds 16 people', availabileUntil: '5:30pm' },
  { name: 'Black Room', key: 'Black-Room', description: 'Holds 10 people', availabileUntil: '4:30pm' },
  { name: 'Yellow Room', key: 'Yellow-Room', description: 'Holds 8 people', availabileUntil: '3:00pm' },
  { name: 'Cyan Room', key: 'Cyan-Room', description: 'Holds 6 people', availabileUntil: '7:30pm' },
  { name: 'Magenta Room', key: 'Magenta-Room', description: 'Holds 666 people', availabileUntil: '5:15pm' },
]

const Room = ({room, onPress}) => (
  <TouchableHighlight
    onPress={() => console.log(room.name)}
  >
    <View
      style={[styles.section, styles.room]}>
      <View style={styles.column}>
        <Text style={styles.roomName}>{room.name}</Text>
        <Text style={styles.roomDescription}>{room.description}</Text>
      </View>
      <View style={styles.column}>
        <Text>{room.availabileUntil}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

const Button = ({ label, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
  >
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  </TouchableHighlight>
)

const Link = ({ label, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
  >
    <Text style={styles.linkText}>{label}</Text>
  </TouchableHighlight>
)

export default class List extends React.Component {
  render() {
    const { navigate } = this.props

    return (
      <View style={styles.container}>
        <View style={{ flex: 1.3 }}>
          <View style={styles.section}>
            <Text>Your next meetings is in 15 minutes in the Red Room</Text>
              <Link
                label="View your bookings"
                onPress={() => {
                  navigate('Bookings', { name: 'linksypoo'})
                }}
              />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              label="Bookit"
              onPress={() => {
                console.log('booking it')
              }}
            />
          </View>
          <View style={styles.section}>
            <Text>I need a room right now for: <Text style={styles.linkText}>1 hour</Text></Text>
          </View>
        </View>

        <View style={{ flex: 2 }}>
          <FlatList
            data={rooms}
            renderItem={({item}) => <Room room={item} />}
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
