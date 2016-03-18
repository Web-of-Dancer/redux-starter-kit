import React from 'react';

var BlockUpRight = React.createClass({
	render: function () {
		return (
			<div className="up-right">
				<div className="block-title" style={{height:"0.5rem",lineHeight:"0.5rem"}}>
					<span className="blue-dot" style={{marginLeft:"0.3rem",marginTop:"0.2rem"}}></span>
					<span className="title-text" style={{marginLeft:"0.1rem"}}>title</span>
				</div>
				<div className="block-content" style={{height:"4.2rem",marginTop:"2px"}}>
				content
				</div>
			</div>
		);
	}
});

export default BlockUpRight;