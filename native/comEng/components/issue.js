import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

export default class Issue extends Component {
    render() {
        return (
            <View>
                <Text>Issue</Text>
                <TextInput
                    editable = {true}
                />
            </View>
        )
    }
}