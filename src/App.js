/** @format */

import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Profile from "./components/Dashboard/Profile";
import UserProfile from "./components/Dashboard/profile2";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Footer from "./components/Home/Footer";
import BatchTen from "./components/TopNavbar/AlumuniNetwork/BatchTen";
import BatchEleven from "./components/TopNavbar/AlumuniNetwork/BatchEleven";
import BatchTwelve from "./components/TopNavbar/AlumuniNetwork/BatchTwelve";
import BatchThirteen from "./components/TopNavbar/AlumuniNetwork/BatchThirteen";
import Home from "./components/Home/home";
import MainGallery from "./components/TopNavbar/Gallery";
import NotFound from "./components/All/Notfound";
// import LazyLoading from "./components/All/LazyLoading";
import Donate from "./components/TopNavbar/Donate";
import Magazine from "./components/TopNavbar/Magazine";
import Navbar from "./components/TopNavbar/Navbar";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar/>
				{/* <TopNavbar/> */}
				<Switch>
					
					<Route exact path="/" component={Home} />
					<Route path="/navbar" component={TopNavbar} />
					<Route path="/gallery" component={MainGallery} />
					<Route path="/donate" component={Donate} />
					<Route path="/magazine" component={Magazine} />
					<Route path="/YourProfile/:id" component={UserProfile} />
					<Route path="/profile/:id" component={Profile} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/alumni/2010" component={BatchTen} />
					<Route path="/alumni/2011" component={BatchEleven} />
					<Route path="/alumni/2012" component={BatchTwelve} />
					<Route path="/alumni/2013" component={BatchThirteen} />
					{/* <Route path="/lazyloading" component={LazyLoading} /> */}

					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
