
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Navigator } from './src/Route';
import io from "react-native-socket.io-client";
import { Provider } from 'react-redux';

export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            text: ''
        };
        this.socket = io.connect('http://10.0.2.2:3000/', {jsonp: false});
        console.ignoredYellowBox = ['Setting a timer'];
    }
    render() {
        return (
            <Provider>
            <Navigator />
            </Provider>
        );
    }
}
