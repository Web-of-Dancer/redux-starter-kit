export const FETCH_NEGATIVE_MONITOR_DATA = 'FETCH_NEGATIVE_MONITOR_DATA';

export function getMonitorData () {
	return function (dispatch) {
		dispatch({
			type: FETCH_NEGATIVE_MONITOR_DATA,
			status: 0
		});

		$.ajax({
			"url":"/json/negative_monitor.json?t=" + new Date().getTime(),
			"type": "get"
		})
		.done(function(re) {
			dispatch({
				type: FETCH_NEGATIVE_MONITOR_DATA,
				status: re.status,
				msg: re.msg,
				data: re.data
			});
		})
		.fail(function() {
			dispatch({
				type: FETCH_NEGATIVE_MONITOR_DATA,
				status: 1,
				msg: 'error'
			});
		});
	};
}