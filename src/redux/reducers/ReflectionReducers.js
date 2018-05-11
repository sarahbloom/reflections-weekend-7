import { combineReducers } from "redux";

export const reflectionList = (state = [], action) => {
    switch (action.type) {
        case 'DISPLAY_REFLECTIONS':
            console.log('in reducer - DISPLAY_REFLECTIONS', action);
            return action.payload;
        case 'DISPLAY_UPDATED_REFLECTIONS':
        console.log('in reducer - update', action);
            return state.filter((reflection) => { return reflection.id !== action.payload })
        default:
            return state;
    }// end switch statement
} //end reflectionList

export default combineReducers({ reflectionList})