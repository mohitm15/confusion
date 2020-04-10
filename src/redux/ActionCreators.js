import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
//thunk containg ineer fn to fetch dishes
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    
    //after delay, puttng the dishes in our store
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

//return action object dish loading
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

//return action object for displaying err message (payload)
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

//return action object to add dishes 
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});