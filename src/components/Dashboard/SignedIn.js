/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
const SignedIn = (props) => {
	console.log("Signedin props");

	console.log(props);
	// const {auth.uid}= this.props
	var divStyle = {
		// color: 'white',
		// backgroundImage: 'url(' + imgUrl + ')',
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px",
		// backgroundColor: "blue",
	};
	var divStyle2 = {
		// color: 'white',
		// backgroundImage: 'url(' + imgUrl + ')',
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "15px",
		paddingBottom: "0px",
		// backgroundColor: "blue",
	};
	var divStyleLogout = {
		// color: 'white',
		// backgroundImage: 'url(' + imgUrl + ')',
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "15px",
		paddingBottom: "15px",
		// backgroundColor: "blue",
	};
	if (props.auth.emailVerified) {
		return (
			<div>
				<div className="row">
					<div className="col-6 col-md-12" style={divStyle}>
						<NavLink to={"/YourProfile/" + props.auth.uid}>
							<b>View Profile</b>{" "}
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-person-fill"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
						</NavLink>
					</div>
					<div className="col-6 col-md-12" style={divStyle}>
						<NavLink to="/">
							<a onClick={props.signOut} href="//">
								<b>Logout</b>{" "}
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									className="bi bi-box-arrow-in-right"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
									/>
									<path
										fillRule="evenodd"
										d="M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z"
									/>
									<path
										fillRule="evenodd"
										d="M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z"
									/>
								</svg>
							</a>{" "}
						</NavLink>
					</div>
				</div>
				{/* <ul className="right">
					<li>
						<NavLink
							to="/"
							className="btn btn-floating pink lighten-1"
						>
							SS
						</NavLink>
					</li>
				</ul> */}
			</div>
		);
	} else {
		return (
			<div>
				<div className="row" style={divStyle2}>
					<p className="alert alert-danger mb-0" role="alert">
						To view and edit your profile you must verify your
						email first.
					</p>
				</div>
				<div className="row" style={divStyleLogout}>
					<NavLink to="/">
						<a onClick={props.signOut} href="//">
							<b>Logout</b>{" "}
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								className="bi bi-box-arrow-in-right"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
								/>
								<path
									fillRule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z"
								/>
								<path
									fillRule="evenodd"
									d="M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z"
								/>
							</svg>
						</a>{" "}
					</NavLink>
				</div>
			</div>
		);
	}
};
const mapStateToProps = (state) => {
	console.log(state.firebase.auth);
	return {
		auth: state.firebase.auth,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
