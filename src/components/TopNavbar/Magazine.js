/** @format */

import React, { Component } from "react";
import Menu from "../Home/menu";

class Magazine extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container"  >
				
				{/* <Menu/> */}
				<Menu/>
			</div>
		);
	}
}

export default Magazine;
