import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

var username = '';

const setName = (state = username, action) => {
    if(action.type === 'INCREMENT'){
        state += 1;
        return state++;
    }
    else if(action.type === types.DECREMENT){
        state -= 1;
        return state;
    }
    return state;
};