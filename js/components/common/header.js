import React from 'react';

var Header = React.createClass({
	render: function () {
		return (
			<div className={"header"}>
				<h1>redux-starter-kit</h1>
				<div className={"header-right"}>
					<div className={"user-info"} style={{fontSize:"0.16rem"}}>admin</div>
					<span className={"login-btn"}></span>
				</div>
			</div>
		);		
	}
});

export default Header;