import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

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

export default Room

const styles = StyleSheet.create({
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
});
