import { combineReducers } from "redux";

export const reflectionList = (state = [], action) => {
    switch (action.type) {
        case 'DISPLAY_REFLECTIONS':
            console.log('in reducer - DISPLAY_REFLECTIONS', action);
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({ reflectionList})