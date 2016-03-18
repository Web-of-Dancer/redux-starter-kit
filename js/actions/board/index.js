export const FETCH_BOARD_DATA = 'FETCH_BOARD_DATA';

export function getBoardData () {
	return function (dispatch) {
		dispatch({
			type: FETCH_BOARD_DATA,
			status: 0
		});

		$.ajax({
			"url":"/json/board.json?t=" + new Date().getTime(),
			"type": "get"
		})
		.done(function(re) {
			dispatch({
				type: FETCH_BOARD_DATA,
				status: re.status,
				msg: re.msg,
				data: re.data
			});
		})
		.fail(function() {
			dispatch({
				type: FETCH_BOARD_DATA,
				status: 1,
				msg: 'error'
			});
		});
	};
}