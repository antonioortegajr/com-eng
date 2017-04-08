import React, { Component, PropTypes } from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
} from 'react-native'
import { connect } from 'react-redux'
import { Link } from 'react-router-native'
import { setSidemenuStatus } from '../actions/sidemenu'

class Nav extends Component {
    static contextTypes = {
        router: PropTypes.shape({
            history: PropTypes.shape({
                push: PropTypes.func.isRequired,
                replace: PropTypes.func.isRequired
            }).isRequired
        }).isRequired
    }
    constructor(props, context) {
        super(props, context)
        this.history = context.router.history
    }
    render () {
        return (
            <View style={styles.navs}>
                <TouchableHighlight
                    style={styles.nav}
                    onPress={() => {
                        this.props.setSidemenuStatus(!this.props.isOpen)
                        this.history.push('/')
                    }}
                >
                    <Text style={styles.navText}>Home</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        this.props.setSidemenuStatus(!this.props.isOpen)
                        this.history.push('/issue')
                    }}
                >
                    <Text style={styles.navText}>Issue</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nav: {
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    navText: {
        fontSize: 16,
    }
});


const mapStateToProps = state => ({
    isOpen: state.sidemenu.open
})

const mapDispatchToProps = dispatch => ({
    setSidemenuStatus(isOpen) {
        dispatch(setSidemenuStatus(isOpen))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
