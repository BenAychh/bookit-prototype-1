import React from 'react';
import axios from 'axios';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import List from '../components/List';

const baseUrl = 'http://76731cb1.ngrok.io/v1/'
// TODO: Allow user to select location
const locationId = 1

const rooms = [
  { name: 'White Room', key: 'White-Room', description: 'Holds 16 people', availabileUntil: '5:30pm' },
  { name: 'Black Room', key: 'Black-Room', description: 'Holds 10 people', availabileUntil: '4:30pm' },
  { name: 'Yellow Room', key: 'Yellow-Room', description: 'Holds 8 people', availabileUntil: '3:00pm' },
  { name: 'Cyan Room', key: 'Cyan-Room', description: 'Holds 6 people', availabileUntil: '7:30pm' },
  { name: 'Magenta Room', key: 'Magenta-Room', description: 'Holds 666 people', availabileUntil: '5:15pm' },
]

export default class HomeScreen extends React.Component {
  // QUESTION: What is this `static` about?
  static navigationOptions = {
    header: null,
  }

  constructor() {
    // TODO: Show isRequestPending in UI. Is there a RN/Expo way to do this?
    super()
    this.state = {
      isRequestPending: false,
      bookables: [],
    }
  }

  componentDidMount() {

    axios.get(`${baseUrl}location/${locationId}/bookable`)
      .then(response => {
        this.setState({ bookables: response.data })
      })
      .catch(error => {
        console.log('Oh no. There was an error:', error.message)
      })
  }

  saveBooking(booking) {
    const sampleBooking = {
      bookableId: 1,
      end: "2019-12-13T17:21",
      start: "2019-12-13T16:21",
      subject: "Sample booking",
    }
    console.log('booking');
    console.log(booking)
    console.log('sampleBooking');
    console.log(sampleBooking)
    axios.post(`${baseUrl}booking`, booking)
      .then(function (response) {
        console.log('Created booking:');
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <List
        navigate={navigate}
          rooms={this.state.bookables}
        saveBooking={(b) => {
          this.saveBooking(b)
        }}
      />
    );
  }
}
