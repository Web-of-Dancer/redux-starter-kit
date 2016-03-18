import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BlockUpLeft from './BlockUpLeft';
import BlockUpRight from './BlockUpRight';
import BlockDownLeft from './BlockDownLeft';
import BlockDownRight from './BlockDownRight';
import * as boardActions from '../../actions/board';

var Board = React.createClass({
	componentDidMount: function () {
		console.log("board mount");
		setTimeout(this.props.actions.getBoardData, 500);
	},
	componentDidUpdate: function () {
		console.log("board update");
	},
	render: function () {
		console.log("board render");
		return (
			<div className="board">
				<BlockUpLeft categoryData={this.props.categoryData} levelData={this.props.levelData} />
				<BlockUpRight />
				<BlockDownLeft brandData={this.props.brandData} />
				<BlockDownRight />
			</div>
		);
	}
});


function mapStateToProps (state) {
	return {
		categoryData: state.app.board.data.categoryData,
		levelData: state.app.board.data.levelData,
		brandData: state.app.board.data.brandData
	};
}
const mapDispatchToProps = (dispatch) => {
	var boundActionCreators = bindActionCreators(boardActions, dispatch);
	return {actions: boundActionCreators};
};


// export default Board;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);