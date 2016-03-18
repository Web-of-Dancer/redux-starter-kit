import * as ActionTypes from '../../actions/negative/monitor';

var initialState = {
	data: {
		"levelData": [],
		"cateData": []
	},
	Loading: false,
	error: false,
	msg: ""
};

// 处理数据请求状态
function fetchProcess (state, action) {
	switch (action.status) {
		case 0:
			return Object.assign({}, state, {Loading: true});
		case 1:
			return Object.assign({}, state, {msg: action.msg, Loading: false});
		case 200:
			return Object.assign({}, state, {data: action.data, Loading: false});
		default:
			return state;
	}
}

// reducer
var board = function (state = initialState, action) {
	switch (action.type) {
		case ActionTypes.FETCH_NEGATIVE_MONITOR_DATA:
			return fetchProcess(state, action);
		default:
			return state;
	}
};

export default board;