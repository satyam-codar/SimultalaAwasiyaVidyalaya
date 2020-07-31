/** @format */

import React from "react";
import SignedIn from "../Dashboard/SignedIn";
import SignedOut from "../Dashboard/SignedOut";
import { connect } from "react-redux";
import SignIn from "../Auth/SignIn";
const SlideShow = (props) => {
	const { auth } = props;
	return (
		// <!-- Slide show -->

		<div className="container-fluid">
			<div className="row no-gutters">
				<div className="col-md-2 col-lg-2">
					{auth.isEmpty ? <SignedOut /> : <SignedIn />}
				</div>
				<div
					className="col-xs-12 col-md-8 col-lg-8"
					style={{ width: "100%", height: "auto" }}
				>
					<div
						id="demo"
						className="carousel slide"
						data-ride="carousel"
					>
						<ul className="carousel-indicators">
							<li
								data-target="#demo"
								data-slide-to="0"
								className="active"
							></li>
							<li data-target="#demo" data-slide-to="1"></li>
							<li data-target="#demo" data-slide-to="2"></li>
							<li data-target="#demo" data-slide-to="3"></li>
							<li data-target="#demo" data-slide-to="4"></li>
						</ul>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="image10_1.jpg"
									alt="Los Angeles"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption">
									{/* <h3>Write caption!</h3>
									<p>This photo is awesome!</p> */}
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="image10_5.jpg"
									alt="Chicago"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption">
									{/* <h3>Write caption!</h3>
									<p>This photo is awesome!</p> */}
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="image10_7.jpg"
									alt="Chicago"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption">
									{/* <h3>Write caption!</h3>
									<p>This photo is awesome!</p> */}
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="image10_9.jpg"
									alt="Chicago"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption">
									{/* <h3>Write caption!</h3>
									<p>This photo is awesome!</p> */}
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="image10_6.jpg"
									alt="Chicago"
									width="100%"
									height="auto"
								/>
								<div className="carousel-caption">
									{/* <h3>Write caption!</h3>
									<p>This photo is awesome!</p> */}
								</div>
							</div>
							{/* <!-- <div className="carousel-item">
								<img
									src="Lord-Shiva-Hd-Images.jpg"
									alt="New York"
									width="100"
									height="100"
								/>
								<div className="carousel-caption">
									<h3>New York</h3>
									<p>We love the Big Apple!</p>
								</div>
							</div> --> */}
						</div>
						<a
							className="carousel-control-prev"
							href="#demo"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon"></span>
						</a>
						<a
							className="carousel-control-next"
							href="#demo"
							data-slide="next"
						>
							<span className="carousel-control-next-icon"></span>
						</a>
					</div>
				</div>
				<div className="col-md-2 col-lg-2 container-fluid mt-4">
					<SignIn />
				</div>
			</div>
		</div>

		// <!-- /Slide show -->
	);
};

const mapStateToProps = (state) => {
	console.log("hi from slodeshow");
	console.log(state);
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps)(SlideShow);
