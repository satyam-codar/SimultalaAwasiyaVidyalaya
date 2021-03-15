/** @format */

import React, { Component } from "react";
import SlideShow from "./SlideShow";
import About from "./About";
import Cards from "./cards";
class Home extends Component {
	state = {};
	render() {
		return (
			<div className="">
				<SlideShow />
				<br/>
				<br/>
				<Cards/>
				<About />
			</div>
		);
	}
}

export default Home;
