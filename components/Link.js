import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const Link = ({ label, onPress }) => (
  <TouchableHighlight
    onPress={onPress}
  >
    <Text style={styles.linkText}>{label}</Text>
  </TouchableHighlight>
)

export default Link

const styles = StyleSheet.create({
  linkText: {
    color: 'tomato'
  },
});
