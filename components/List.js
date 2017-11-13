import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

// TODO: Move these components to separate files.
const Room = ({room, onPress}) => (
  <TouchableHighlight
    onPress={() => console.log(room.name)}
  >
    <View
      style={[styles.section, styles.room]}>
      <View style={styles.column}>
        <Text style={styles.roomName}>{room.name}</Text>
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

// TODO: List should take rooms as props
// TODO: This isn't really `List`. More like `BookingForm`. Rename when this is clear.
// TODO: Make this a stateless component. The "screen" should hold the state.
export default class List extends React.Component {
  render() {
    const { navigate, rooms, saveBooking } = this.props

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
                saveBooking()
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
            renderItem={({item}) => <Room room={item}/>}
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
