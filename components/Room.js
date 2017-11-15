import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

const Room = ({room, onPressItem, selected }) => (
  <TouchableHighlight
    onPress={() => onPressItem(room.id)}
    underlayColor="#ddd"
  >
    <View style={[
      styles.room,
      room.id === selected ? styles.selected : styles.notSelected
    ]}>
      <Text style={styles.roomName}>{room.name}</Text>
    </View>
  </TouchableHighlight>
)

export default Room

const styles = StyleSheet.create({
  room: {
    paddingLeft: 30,
    marginLeft: 30,
    marginBottom: 15,
    borderLeftWidth: 3,
    paddingLeft: 5,
  },
  roomName: {
    fontSize: 18,
  },
  notSelected: {
    borderLeftColor: '#eee',
  },
  selected: {
    borderLeftColor: 'tomato',
  }
});
