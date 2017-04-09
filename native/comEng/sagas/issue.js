import { delay } from 'redux-saga'
import { take, put,takeEvery, fork } from 'redux-saga/effects'
import {
    REQUEST_ISSUES
} from '../actions/issues'
import {
    CREATE_ISSUE,
    CREATE_ISSUE_SUCCESS,
    CREATE_ISSUE_FAIL ,
    VOTE_ISSUE,
    VOTE_ISSUE_SUCCESS,
    VOTE_ISSUE_FAIL,
} from '../actions/issue'
import config from '../config'

export function* createIssuesAsync() {
    while (true) {
        const { issue } = yield take(CREATE_ISSUE)
        try {
            issue.issueID = `${(new Date).getTime()}`
            const issues = yield fetch(
                'https://gabezjlby1.execute-api.us-west-2.amazonaws.com/Hacktest/',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(issue)
                }
            ).then(resp => resp.json())
            yield put({ type: CREATE_ISSUE_SUCCESS, issues })
        } catch (error) {
            yield put({ type: 'REQUEST_ISSUES_FAILED', error })
        }
    }
}

export function* voteIssueAsync() {
    while (true) {
        const { issueID } = yield take(VOTE_ISSUE)
        try {
            const respo = fetch('https://gabezjlby1.execute-api.us-west-2.amazonaws.com/Hacktest/issue', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ issueID, voteUsers: config.userID })
            })
            .then(resp => resp.json())
            yield put({ type: VOTE_ISSUE_SUCCESS, issueID })
            yield delay(1000)
            yield put({ type: REQUEST_ISSUES })
        } catch (error) {
            yield put({ type: VOTE_ISSUE_FAIL, error })
        }
    }
}

export default [
    fork(createIssuesAsync),
    fork(voteIssueAsync),
]
