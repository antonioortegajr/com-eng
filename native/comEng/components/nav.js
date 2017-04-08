import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Link } from 'react-router-native'

export default () => (
  <View style={styles.nav}>
    <Link
      to="/">
      <Text>Home</Text>
    </Link>
    <Link
      to="/issue">
      <Text>issue</Text>
    </Link>
  </View>
)

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
