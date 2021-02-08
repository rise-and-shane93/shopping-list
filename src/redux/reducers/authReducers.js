import {ADD_CATEGORY, WELCOME_MSG} from '../actions/types';

const initialState = {
    message: "",
    // categories: ["Food"]
    categories: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case WELCOME_MSG:
            return {
                ...state,
                message: action.payload
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        default:
            return state;
    }
}