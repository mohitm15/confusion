import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
     
        dishes: DISHES,  
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS 
};

//reducer function (pure function), takes actions+previous state as input
export const Reducer = (state = initialState, action) => {
    //alert("The current state is " + state);
    return state; //just returning state currently
};