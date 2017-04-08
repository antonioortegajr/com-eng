import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';
import { requestIssues } from '../actions/issues'
import { Card, ListItem } from 'react-native-elements'

class Home extends Component {
    static defaultProps = {
        issues: {
            byId: {

            },
            allIds: []
        }
    }

    componentDidMount() {
        this.props.requestIssues()
    }
    render() {
        return (
            <Card
                title='Issues'
            >
                {
                    this.props.issues.allIds.reduce((carry, issueId) => ([...carry, this.props.issues.byId[issueId]]),[])
                    .map(issue => (
                        <ListItem
                            key={issue.issueID}
                            title={issue.issueName}
                        />
                    ))
                }
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    requestIssues() {
        dispatch(requestIssues())
    }
})

const mapStateToProps = state => ({
    issues: state.issues
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
