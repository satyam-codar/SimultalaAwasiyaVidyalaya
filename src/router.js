// Libs
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Teachers from "./components/Teachers";

// Routes
const routes = (
	<Router>
		<App>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/courses" component={Courses} />
			<Route path="/teachers" component={Teachers} />
		</App>
	</Router>
);

export default routes;
