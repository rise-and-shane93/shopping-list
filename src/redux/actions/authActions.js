import {WELCOME_MSG, ADD_CATEGORY} from './types';

export const authActions = () => dispatch => {
    dispatch({
        type: WELCOME_MSG,
        payload: "hello world"
    });
};

export const addCategory = (catName) => dispatch => {
    // console.log(catName);
    dispatch({
        type: ADD_CATEGORY,
        payload: catName
    })
}