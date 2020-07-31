/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authAction";
import { Redirect } from "react-router";
class SignUp extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		selection: "Male",
	// 	};
	// }
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		gender: "",
		admissionYear: "",
		admissionNo: "",
		phoneNumber: "",
		collegeName: "",
		degreeName: "",
	};

	handleChange = (e) => {
		// console.log(e);
		this.setState({
			[e.target.id]: e.target.value,
			// selection: e.target.value,
		});
	};
	handleSubmit = (e) => {
		// console.log(e);
		e.preventDefault();
		console.log("state from signup");
		console.log(this.state);
		this.props.signUp(this.state);
	};
	render() {
		const { isAuthenticated } = this.props;
		// console.log(isAuthenticated)
		console.log(this.props);
		if (isAuthenticated.uid) {
			return <Redirect to="/" />;
		}
		return (
			<div className="container-fluid">
				{/* <!-- Default form register --> */}
				<form
					className="text-center border border-light p-1"
					action="#!"
					onSubmit={this.handleSubmit}
				>
					<p className="h4 mb-4">Sign up</p>

					<div className="form-row mb-4">
						<div className="col">
							{/* <!-- First name --> */}
							<input
								type="text"
								id="firstName"
								name="RegisterUserFirstName"
								className="form-control"
								placeholder="First name"
								onChange={this.handleChange}
							/>
						</div>
						<div className="col">
							{/* <!-- Last name --> */}
							<input
								type="text"
								id="lastName"
								name="RegisterUserLastName"
								className="form-control"
								placeholder="Last name"
								onChange={this.handleChange}
							/>
						</div>
					</div>
					{/* <div className="form-row">
						<div className="col-4" style={{ float: "left" }}>
							<p style={{ float: "left" }}>Gender:</p>
						</div>
						<div className="col-8">
							<div
								className="custom-control custom-radio custom-control-inline"
								style={{ float: "left" }}
							>
								<input
									type="radio"
									id="Male"
									name="customRadioInline1"
									className="custom-control-input"
									value="Male"
									checked={this.state.selection === "Male"}
									onChange={this.handleChange}
								/>
								<label
									className="form-check-label"
									htmlFor="Male"
								>
									Male
								</label>
							</div>
							<div
								className="custom-control custom-radio custom-control-inline "
								style={{ float: "left" }}
							>
								<input
									type="radio"
									id="Female"
									name="customRadioInline1"
									className="form-check-input"
									value="Female"
									checked={this.state.selection === "Female"}
									onChange={this.handleChange}
								/>
								<label
									className="custom-control-label"
									htmlFor="Female"
								>
									Female
								</label>
							</div>
						</div>
					</div> */}
					<div>
						{/* <!-- Gender --> */}
						<div className="form-group row">
							<label
								htmlFor="colFormLabel"
								className="col-sm-2 col-form-label"
							>
								Gender
							</label>
							<div className="col-sm-10">
								<input
									type="text"
									className="form-control"
									id="gender"
									placeholder="Male or Female or Others"
									onChange={this.handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="form-row mb-4">
						<div className="col">
							{/* <!-- Admission Year --> */}
							<label
								htmlFor="exampleInputAdmYear"
								style={{ float: "left" }}
							>
								Admission Year:
							</label>
							<input
								type="number"
								id="admissionYear"
								name="RegisterUserAdmYear"
								className="form-control"
								placeholder="2011"
								onChange={this.handleChange}
							/>
						</div>
						<div className="col">
							{/* <!-- School admission number --> */}
							<label
								htmlFor="exampleInputAdmNo"
								style={{ float: "left" }}
							>
								Admission Number:
							</label>
							<input
								id="admissionNo"
								name="RegisterUserAdmNo"
								className="form-control mb-4"
								placeholder="SAV-11-29"
								onChange={this.handleChange}
							/>
						</div>
					</div>

					{/* <!-- E-mail --> */}
					<input
						type="email"
						id="email"
						name="RegisterEmail"
						className="form-control mb-4"
						placeholder="E-mail"
						onChange={this.handleChange}
					/>

					{/* <!-- Password --> */}
					<input
						type="password"
						id="password"
						name="RegisterPassword"
						className="form-control"
						placeholder="Password"
						aria-describedby="defaultRegisterFormPasswordHelpBlock"
						onChange={this.handleChange}
					/>
					<small
						id="defaultRegisterFormPasswordHelpBlock"
						className="form-text text-muted mb-4"
					>
						At least 8 characters and 1 digit
					</small>

					{/* <!-- Phone number --> */}
					<input
						type="text"
						id="phoneNumber"
						name="RegisterUserPhoneNo"
						className="form-control"
						placeholder="Phone number"
						aria-describedby="defaultRegisterFormPhoneHelpBlock"
						onChange={this.handleChange}
					/>
					{/* <!-- College Name --> */}
					<input
						type="text"
						id="collegeName"
						name="collegeName"
						className="form-control mt-3"
						placeholder="Your college name"
						aria-describedby="defaultRegisterFormPasswordHelpBlock"
						onChange={this.handleChange}
					/>
					{/* Degree name */}
					<input
						type="text"
						id="degreeName"
						name="degreeName"
						className="form-control mt-3 mb-2"
						placeholder="Degree"
						aria-describedby="WhichdegreeyouArePersuing"
						onChange={this.handleChange}
					/>

					{/* <!-- Sign up button --> */}
					<button
						className="btn btn-info my-4 btn-block"
						type="submit"
					>
						Sign in
					</button>
					<input type="reset" />

					{/* <!-- Social register --> */}
					<p>or sign up with:</p>

					<a href="//" className="mx-2" role="button">
						<i className="fab fa-facebook-f light-blue-text"></i>
					</a>
					<a href="//" className="mx-2" role="button">
						<i className="fab fa-twitter light-blue-text"></i>
					</a>
					<a href="//" className="mx-2" role="button">
						<i className="fab fa-linkedin-in light-blue-text"></i>
					</a>
					<a href="//" className="mx-2" role="button">
						<i className="fab fa-github light-blue-text"></i>
					</a>

					<hr />

					{/* <!-- Terms of service --> */}
					<p>
						By clicking <em>Sign up</em> you agree to our &nbsp;
						<a href="//" target="_blank" rel="noopener noreferrer">
							terms of service
						</a>
					</p>
				</form>

				{/* <!-- Default form register --> */}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log(state);
	return {
		isAuthenticated: state.firebase.auth,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (userData) => dispatch(signUp(userData)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
