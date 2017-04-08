import React, { Component } from 'react'
import SideMenu from 'react-native-side-menu'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    StatusBar,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './components/home'
import Issue from './components/issue'
import Nav from './components/nav'
import { setSidemenuStatus } from './actions/sidemenu'

class App extends Component {
    render() {
        return (
            <NativeRouter>
                <SideMenu
                    isOpen={this.props.isOpen}
                    onChange={(isOpen) => {
                        this.props.setSidemenuStatus(isOpen)
                    }}
                    menu={<Nav />}>
                    <View style={styles.container}>
                        <View
                            style={{
                                backgroundColor: '#f00',
                                justifyContent: 'center',
                                paddingHorizontal: 10,
                                height: 70,
                            }}>
                            <Icon
                                    name="bars"
                                    onPress={() => {
                                        this.props.setSidemenuStatus(!this.props.isOpen)
                                    }}
                                    size={32}
                                    color="#fff"/>
                        </View>
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
        backgroundColor: '#F5FCFF',
    },
})

const mapStateToProps = state => ({
    isOpen: state.sidemenu.open
})

const mapDispatchToProps = dispatch => ({
    setSidemenuStatus(isOpen) {
        dispatch(setSidemenuStatus(isOpen))
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
