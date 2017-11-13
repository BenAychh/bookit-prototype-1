import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import Room from './Room.js'
import Button from './Button.js'
import Link from './Link.js'

// TODO: Move these components to separate files.
// TODO: This isn't really `List`. More like `BookingForm`. Rename when this is clear.

const List = ({ navigate, rooms, saveBooking }) => (
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

export default List

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
});
