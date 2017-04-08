import { delay } from 'redux-saga'
import axios from 'axios'
import { put, takeEvery, fork } from 'redux-saga/effects'
import { REQUEST_ISSUES, REQUEST_ISSUES_FAILED, RECEIVED_ISSUES } from '../actions/issues'

export function* requestIssuesAsync() {
    try {
        const { data: issues } = yield axios.get('https://gabezjlby1.execute-api.us-west-2.amazonaws.com/Hacktest/listissues')
        yield put({ type: 'RECEIVED_ISSUES', issues })
    } catch (error) {
        yield put({ type: 'REQUEST_ISSUES_FAILED', error })
    }
}

export function* watchRequestIssuesAsync() {
    yield takeEvery('REQUEST_ISSUES', requestIssuesAsync)
}


export default [
    fork(watchRequestIssuesAsync)
]
