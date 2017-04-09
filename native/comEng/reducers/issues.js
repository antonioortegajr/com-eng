import { RECEIVED_ISSUES } from '../actions/issues'
import { uniqWith, isEqual } from 'lodash'

export const initialState = {
    byId: {

    },
    allIds: []
}

export default issues = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ISSUES:
            return {
                byId: {
                    ...state.byId,
                    ...action.issues.reduce((carry, issue) => ({
                        ...carry,
                        [issue.issueID]: issue
                    }),{})
                },
                allIds: uniqWith([ ...state.allIds, ...action.issues.map(issue => issue.issueID) ], isEqual)
            }
            break;
        default:
            return state
    }
}
