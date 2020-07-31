/** @format */

import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
	};

	handleChange = (e) => {
		// console.log(e);
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		// console.log(e);
		e.preventDefault();
		console.log("Hi from signin");
		console.log(this.state);
		console.log(this.props);
		this.props.signIn(this.state);
	};
	render() {
		const { authError } = this.props;
		const { isAuthenticated } = this.props;
		
		if (isAuthenticated.uid) {
			return <Redirect to="/" />;
		} else {
			return (
				<div className="container">
					<form action="#!" onSubmit={this.handleSubmit}>
						<p className="h4 mb-4">Sign in</p>

						{/* <!-- Email --> */}
						<div className="form-group">
							<label
								htmlFor="exampleInputEmail1"
								style={{ float: "left" }}
							>
								Email address:
							</label>
							<input
								type="email"
								name="loginEmail"
								className="form-control"
								id="email"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label
								htmlFor="exampleInputPassword1"
								style={{ float: "left" }}
							>
								Password:
							</label>
							<input
								type="password"
								name="loginPassword"
								className="form-control"
								id="password"
								placeholder="Password"
								onChange={this.handleChange}
							/>
						</div>

						<div className="d-flex justify-content-around">
							<div>
								{/* <!-- Forgot password --> */}
								<a href="//">Forgot password?</a>
							</div>
							<div className="danger">
								{authError ? <p> {authError} </p> : null}
							</div>
						</div>

						{/* <!-- Sign in button --> */}
						<button
							className="btn btn-info btn-block my-4"
							type="submit"
						>
							Sign in
						</button>

						{/* <!-- Register --> */}
						<p>
							Not a member?
							<NavLink to="/signup">SignUp</NavLink>
						</p>
					</form>
				</div>
			);
		}
	}
}
const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		isAuthenticated: state.firebase.auth,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (cred) => dispatch(signIn(cred)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
