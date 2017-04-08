import { RECEIVED_ISSUES } from '../actions/issues'

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
                allIds: [ ...state.allIds, ...action.issues.map(issue => issue.issueID) ]
            }
            break;
        default:
            return state
    }
}
