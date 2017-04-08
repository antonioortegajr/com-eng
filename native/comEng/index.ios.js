import React, { Component } from 'react'
import SideMenu from 'react-native-side-menu'
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './components/home'
import Issue from './components/issue'
import Nav from './components/nav'

export default class comEng extends Component {
  render() {
    return (
      <NativeRouter>
        <SideMenu
          menu={<Nav />}>
            <View style={styles.container}>
             <StatusBar
               backgroundColor="blue"
               barStyle="light-content"
             />
              <Route exact path="/" component={Home}/>
              <Route path="/issue" component={Issue}/>
            </View>
          </SideMenu>
        </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('comEng', () => comEng);
