import React from 'react';
import axios from 'axios';
// TODO: Get rid of extra imports
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

import BookingForm from '../components/BookingForm';

// TODO: Define in app config / env variable.
const baseUrl = 'http://76731cb1.ngrok.io/v1/'
// TODO: Allow user to select location
const locationId = 1

export default class HomeScreen extends React.Component {
  // QUESTION: What is this `static` about?
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super()
    this.state = {
      isRequestPending: false,
      bookables: [],
    }
  }

  componentDidMount() {
    this.setState({ isRequestPending: true })
    axios.get(`${baseUrl}location/${locationId}/bookable`)
      .then(response => {
        this.setState({ bookables: response.data, isRequestPending: false })
      })
      .catch(error => {
        console.log('Oh no. There was an error:', error.message)
        this.setState({ isRequestPending: false })
      })
  }

  saveBooking(booking) {
    const _this = this // QUESTION: Gross. Really? And why does it work in componentDidMount?
    this.setState({ isRequestPending: true })
    axios.post(`${baseUrl}booking`, booking)
      .then(function (response) {
        console.log('Created booking:');
        console.log(response.data);
        _this.setState({ isRequestPending: false })
      })
      .catch(function (error) {
        console.log(error.message);
        _this.setState({ isRequestPending: false })
      });
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <BookingForm
        navigate={navigate}
        rooms={this.state.bookables}
        saveBooking={(b) => {
          this.saveBooking(b)
        }}
        isRequestPending={this.state.isRequestPending}
      />
    );
  }
}
