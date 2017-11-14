import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

const ActivityIndicator = ({ isActive }) => (
  <View style={isActive ? styles.active : styles.inActive}>
  </View>
)

export default ActivityIndicator

const styles = StyleSheet.create({
  active: {
    height: 5,
    backgroundColor: 'rgb(170, 207, 23)'
  },
  inActive: {
    height: 5,
    opacity: 0,
  },
})
