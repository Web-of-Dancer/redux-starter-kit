import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as negativeMonitorActions from '../../../actions/negative/monitor';

var Monitor = React.createClass({
	componentDidMount: function () {
		console.log("negative monitor mount");
		setTimeout(this.props.actions.getMonitorData, 500);
	},
	componentDidUpdate: function () {
		console.log("negative monitor update");
	},
	render: function () {
		return (
			<div className="negative-monitor">
				<div style={{color:"#fff"}}>monitor content</div>
			</div>
		);
	}
});

// 映射state到props
function mapStateToProps (state) {
	return {
		cateData: state.app.negative.monitor.data.cateData,
		levelData: state.app.negative.monitor.data.levelData
	};
}
// 映射dispatch到props
const mapDispatchToProps = (dispatch) => {
	var boundActionCreators = bindActionCreators(negativeMonitorActions, dispatch);
	return {actions: boundActionCreators};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Monitor);