import {
    UPDATE_MESSAGES,
    UPDATE_NOTIFICATIONS,
    UPDATE_TRANSACTIONS,
    UPDATE_SETTINGS_INFO
} from '../types'

const defaultState = {
    messages: [],
    transactions: [],
    notifications: [],
    settings: []
}

const informationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.payload,
            }
        case UPDATE_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
            }
        case UPDATE_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
            }
        case UPDATE_SETTINGS_INFO:
            return {
                ...state,
                settings: action.payload,
            }
        default:
            return state
    }
}

export default informationReducer