import {
    UPDATE_DASH
} from '../types'

const defaultState = {
    title: 'Dashboard'
}

const dashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_DASH:
            return {
                ...state,
                title: action.payload,
            }
        default:
            return state
    }
}

export default dashReducer