import issueSagas from './issues'
import { put, takeEvery } from 'redux-saga/effects'


export default function* rootSaga() {
    yield [
        ...issueSagas
    ]
}
