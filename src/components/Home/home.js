/** @format */

import React, { Component } from "react";
import SlideShow from "./SlideShow";
import About from "./About";
class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<SlideShow />
				<About />
			</div>
		);
	}
}

export default Home;
