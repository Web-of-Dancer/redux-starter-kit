import { combineReducers } from 'redux';
import sideMenu from './sideMenuReducer';

var common = combineReducers({
	sideMenu
});

export default common;