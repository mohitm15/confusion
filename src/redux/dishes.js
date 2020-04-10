import * as ActionTypes from './ActionTypes';

//3 diff actions need to be interpreted by reduces here, toh switch lagaya
export const Dishes = (state = { 
        isLoading: true,
        errMess: null,
        dishes:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}; //returing immutable state

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
//action.payload : contanis dishes info