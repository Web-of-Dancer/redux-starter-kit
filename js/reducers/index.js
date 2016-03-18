import { combineReducers } from 'redux';
import common from './common';
import board from './board';
import negative from './negative';

var appReducer = combineReducers({
	common,
	board,
	negative
});

export default appReducer;