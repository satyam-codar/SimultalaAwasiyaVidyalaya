/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { storage } from "../../config/fbconfig";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { updateProfile } from "../../store/actions/authAction";
// import { Redirect } from "react-router";
class Profile2 extends Component {
	render() {
		console.log("Profile2 props here");
		// console.log(this.props);
		// var id = this.props.match.params.id;
		const { userInfo } = this.props;
		console.log(userInfo);
		// console.log(userInfo);
		// var checked = { userInfo.gender[0]==="M"?true:false}

		if (userInfo) {
			const storageRef = storage.ref();
			storageRef
				.child(`profielIm/${userInfo.studentId}`)
				.getDownloadURL()
				.then(function (url) {
					console.log(url);
					var img = document.getElementById("myimg");
					img.src = url;
				})
				.catch(function (error) {
					// Handle any errors
				});
			console.log(userInfo.gender[0]);
			console.log(userInfo.admissionNo);
			var firstLetter = userInfo.gender[0];
			var checked;
			var checked2;
			// const val = {firstLetter==="M" ? true : false}
			if (firstLetter === ("M" || "m")) {
				checked = true;
			} else {
				checked2 = true;
			}
			return (
				<div className="container-fluid">
					<br />

					<div>
						<Breadcrumb>
							<Breadcrumb.Item>
								<NavLink to="/">
									<FontAwesomeIcon icon={"home"} />
								</NavLink>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<NavLink to="/">Alumni Network</NavLink>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<NavLink
									to={"/alumni/" + userInfo.admissionYear}
								>
									{userInfo.admissionYear} Batch
								</NavLink>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								{userInfo.admissionNo}
							</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<div className="row">
						<div className="col-md-6 text-center">
							<p className="h5 mb-4 mt-4">
								Welcome{" "}
								{userInfo.firstName + " " + userInfo.lastName} !{" "}
								we are proud to have you as a part of Alumni
								relation of our school.
							</p>
							{checked ? (
								<img
									src={
										process.env.PUBLIC_URL +
										"/MalePH200x215.png"
									}
									alt="Placeholder"
									className="img-fluid"
									id="myimg"
								/>
							) : (
								<img
									src={
										process.env.PUBLIC_URL + "/FemalePH.png"
									}
									alt="Placeholder"
									className="img-fluid"
									id="myimg"
								/>
							)}
						</div>
						{/* <img src="MalePH.png" alt="MalePH"/> */}

						<div className="col-md-6">
							{/* <!-- Default form register --> */}
							<form
								className="text-center border border-light p-3"
								action="#!"
								// onSubmit={this.handleSubmit}
							>
								<p className="h4 mb-4">About You:</p>

								<div className="form-row mb-3">
									<div className="col">
										{/* <!-- First name --> */}
										<input
											type="text"
											id="firstName"
											name="RegisterUserFirstName"
											className="form-control"
											placeholder="First name"
											value={userInfo.firstName}
											// onChange={this.handleChange}
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
											// onChange={this.handleChange}
											value={userInfo.lastName}
										/>
									</div>
								</div>
								<div className="form-row">
									<div
										className="col-4"
										style={{ float: "left" }}
									>
										<p style={{ float: "left" }}>Gender:</p>
									</div>
									<div className="col-8">
										<div
											className="custom-control custom-radio custom-control-inline"
											style={{ float: "left" }}
										>
											<input
												type="radio"
												id="customRadioInline1"
												name="customRadioInline1"
												className="custom-control-input"
												checked={checked}
											/>
											<label
												className="custom-control-label"
												htmlFor="customRadioInline1"
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
												id="customRadioInline2"
												name="customRadioInline1"
												className="custom-control-input"
												checked={checked2}
											/>
											<label
												className="custom-control-label"
												htmlFor="customRadioInline2"
											>
												Female
											</label>
										</div>
									</div>
								</div>
								<div className="form-row">
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
											value={userInfo.admissionYear}
											// onChange={this.handleChange}
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
											className="form-control"
											placeholder="SAV-11-29"
											// onChange={this.handleChange}
											value={userInfo.admissionNo}
										/>
									</div>
								</div>

								{/* <!-- College Name --> */}
								<div>
									<div className="form-group row"></div>
								</div>
								<div className="form-group row">
									<label
										htmlFor="colFormLabel"
										className="col-sm-2 col-form-label"
										style={{ float: "left" }}
									>
										College Name:
									</label>
									<div className="col-sm-10">
										<input
											type="text"
											id="collegeName"
											name="collegeName"
											className="form-control mt-0"
											placeholder="Your college name"
											aria-describedby="defaultRegisterFormPasswordHelpBlock"
											// onChange={this.handleChange}
											value={userInfo.collegeName}
										/>
									</div>
								</div>
								<div className="form-group row">
									<label
										htmlFor="degreeName"
										className="col-sm-2 col-form-label"
										style={{ float: "left" }}
									>
										Degree:
									</label>
									<div className="col-sm-10">
										<input
											type="text"
											id="degreeName"
											name="degreeName"
											className="form-control mt-0 mb-2"
											placeholder="Degree"
											aria-describedby="WhichdegreeyouArePersuing"
											// onChange={this.handleChange}
											value={userInfo.degreeName}
										/>
									</div>
								</div>
								{/* Degree name */}

								{/* Contact details  */}
								<div className="form-group row">
									{/* <div> */}
									<label
										htmlFor="exampleInputAdmYear"
										className="col-sm-2 col-form-label"
										style={{ float: "left" }}
									>
										Contact Details:
									</label>
									{/* <!-- E-mail --> */}
									<div className="col-sm-10">
										<input
											type="email"
											id="email"
											name="RegisterEmail"
											className="form-control mt-0"
											placeholder="E-mail"
											// onChange={this.handleChange}
											value={userInfo.email}
										/>
										<input
											type="text"
											id="phoneNumber"
											name="RegisterUserPhoneNo"
											className="form-control mt-3 mb-4"
											placeholder="Phone number"
											aria-describedby="defaultRegisterFormPhoneHelpBlock"
											// onChange={this.handleChange}
											value={userInfo.phoneNumber}
										/>
									</div>
									{/* </div> */}
								</div>

								<h4>
									<p> ^_^ Have a nice day! ^_^ </p>
								</h4>
								<hr />
								{/* <!-- Terms of service --> */}
								<p>
									Please{" "}
									<a
										href="https://www.instagram.com/satyamcheeku/?hl=en"
										target="_blank"
										rel="noopener noreferrer"
									>
										Contact
									</a>{" "}
									us in case you want to update your details.
								</p>
								<p>
									We love feedbacks, do give your valuable
									feedback{" "}
									<a href="https://www.instagram.com/satyamcheeku/?hl=en">
										here
									</a>
								</p>
							</form>
						</div>
					</div>

					{/* <!-- Default form register --> */}
				</div>
			);
		} else {
			return (
				<p>
					Your friend has not resisterd yet! Please ask your friend to
					join our alumni network and be the part of ultimate legacy
					of Simultala Awasiya Vidyalaya
				</p>
			);
		}
	}
}
// const mapStateToProps = (state) => {
// 	return {
// 		isAuthenticated: state.firebase.auth,
// 	};
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		updateProfile: (userData, uid) =>
// 			dispatch(updateProfile(userData, uid)),
// 	};
// };
const mapStateToProp = (state, ownProps) => {
	console.log("hi from profile2");
	console.log(state);
	const id = ownProps.match.params.id;
	console.log("id", id);
	const listOfUsers = state.firestore.data.users;
	// console.log(listOfUsers)
	var students = listOfUsers;
	// console.log(students);
	var x;
	var uid;
	for (x in students) {
		console.log(listOfUsers[x].admissionNo);
		if (listOfUsers[x].admissionNo === id) {
			// const studentInfo = listOfUsers[x]
			uid = x;
			console.log("Uid", uid);
			console.log(x);
			break;
			// return x
		}
	}
	console.log("x", x);
	const userInfo = listOfUsers ? listOfUsers[uid] : null;
	return {
		profiles: state.profile.profiles,
		userInfo: userInfo,
		studentId: id,
		// isAuthenticated: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProp),
	firestoreConnect([{ collection: "users" }])
)(Profile2);
// export default connect(mapStateToProps, mapDispatchToProps)(Profile2);
