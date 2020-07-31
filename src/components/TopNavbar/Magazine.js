/** @format */

import React, { Component } from "react";

class Magazine extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container">
				<h5 style={{ padding: "50px" }}>
					Please note that the editors of the magazine are developing
					this section.
				</h5>
			</div>
		);
	}
}

export default Magazine;
