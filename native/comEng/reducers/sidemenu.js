import { TOGGLE_SIDEMENU, SET_SIDEMENUSTATUS} from '../actions/sidemenu'

export const initialState = {
    open: false
}


export default sidemenu = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEMENU:
            return {
                open: !state.open
            }
            break;
        case SET_SIDEMENUSTATUS:
            return {
                open: action.isOpen
            }
        default:
            return state;
    }
}
