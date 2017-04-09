import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    ScrollView,
    StyleSheet,
    TextInput,
    Text,
    RefreshControl,
    View,
    PixelRatio
} from 'react-native';
import { requestIssues } from '../actions/issues'
import { Card, ListItem, Icon } from 'react-native-elements'
import { voteIssue } from '../actions/issue'

class Home extends Component {
    static defaultProps = {
        issues: {
            byId: {

            },
            allIds: []
        }
    }
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
    componentDidMount() {
        if (!this.props.user) {
            this.history.push('/auth')
        } else {
            this.props.requestIssues()
        }
    }
    render() {
        return (
            <Card
                title='Issues'
            >
                {
                    this.props.issues.allIds
                    .reduce((carry, issueId) => ([...carry, this.props.issues.byId[issueId]]),[])
                    .map(issue => {
                        const hasVoted = issue.voteUsers.indexOf(this.props.user ? this.props.user.id : 'appDemo') !== -1
                        const voteBackgroundColor =  hasVoted ? "#fafafa" : "#c1c0c0"
                        const underlayColor =  hasVoted ? "#fafafa" : "#1EC18B"
                        return (
                            <View
                                key={issue.issueID}
                            >
                                <ListItem
                                    hideChevron
                                    containerStyle={{
                                        height: 70,
                                    }}
                                    title={issue.issueName}
                                    subtitle={issue.Author}
                                />
                                <Icon
                                    key={`${issue.issueID}-up`}
                                    containerStyle={{
                                        position: 'absolute',
                                        top: 2,
                                        right: 0,
                                        backgroundColor: voteBackgroundColor,
                                        borderRadius: 20,
                                    }}
                                    onPress={() => {
                                        !hasVoted && this.props.voteIssue(issue.issueID)
                                    }}
                                    underlayColor={underlayColor}
                                    size={40}
                                    color="#fff"
                                    name="arrow-upward"
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        width: 40,
                                        bottom: 2,
                                        right: 0,
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            width: 20,
                                            fontSize: 12,
                                            color: '#fff',
                                            backgroundColor: 'rgb(0, 122, 255)',
                                            lineHeight: 15,
                                            textAlign: 'center',
                                            borderWidth: 1 + (1 / PixelRatio.get()),
                                            borderColor: '#fefefe',
                                            borderRadius: 17 / 2,
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {issue.Votes}
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    requestIssues() {
        dispatch(requestIssues())
    },
    voteIssue(issuesID) {
        dispatch(voteIssue(issuesID))
    }
})

const mapStateToProps = state => ({
    issues: state.issues,
    user: state.auth.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
