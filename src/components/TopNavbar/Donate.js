/** @format */

import React, { Component } from "react";
class Donate extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container">
				<div style={{ padding: "50px" }}>
					<h4>
						Please note that this service is not available yet! :({" "}
					</h4>
					<h5>
						If you want to donate, then please contact the
						authorities through mail or call. You can find their
						contact details from the bottom of this page.
					</h5>
					<h6>Have a nice day :)</h6>
				</div>
			</div>
		);
	}
}

export default Donate;
