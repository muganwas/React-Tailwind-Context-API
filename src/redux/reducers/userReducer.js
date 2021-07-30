import {
    UPDATE_USER
} from '../types';

const defaultState = {
    user: { name: 'Monika', id: '12345' }
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
};

export default userReducer;