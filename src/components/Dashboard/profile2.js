/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { storage } from "../../config/fbconfig";
import { firestoreConnect } from "react-redux-firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
// import { updateProfile } from "../../store/actions/authAction";
// import { Redirect } from "react-router";
// import {MalePH} from '../../../public/'
class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			// { userInfo } = this.props;

			imgURL: "",
			progress: 0,
		};
		console.log(this.props);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		// this.getImage("imgURL")
	}
	handleChange = (e) => {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			this.setState(() => ({ image }));
			console.log("handle change");
			alert("A file has been selected please press upload now");
			console.log(this.state);
		}
	};
	// 	function createMarkup() { return {__html: 'First &middot; Second'}; };
	// <div dangerouslySetInnerHTML={createMarkup()} />

	handleUpload = () => {
		const { userInfo } = this.props;
		const { image } = this.state;
		const uploadTask = storage
			.ref(`profielIm/${userInfo.studentId}`)
			.put(image);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// progress function ...
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 200
				);
				this.setState({ progress });
			},
			(error) => {
				// Error function ...
				console.log(error);
			},
			() => {
				// complete function ...
				storage
					.ref("profielIm")
					.child(userInfo.studentId)
					.getDownloadURL()
					.then((url) => {
						console.log(url);
						this.setState({ url });
					});
			}
		);
	};
	render() {
		// this.forceUpdateHandler

		// console.log("UserProfile props here");
		// console.log(this.props);
		// var id = this.props.match.params.id;
		const { userInfo } = this.props;
		// console.log(userInfo)
		if (userInfo) {
			console.log(userInfo.studentId);

			// Fetching profile picture
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
					{/* {this.forceUpdateHandler} */}
					{/* <button onClick={this.forceUpdateHandler}>View All</button> */}

					<div className="row justify-content-start">
						<div className="col-md-6 text-center">
							<p className="h5 mb-4 mt-4">
								Welcome{" "}
								{userInfo.firstName + " " + userInfo.lastName} !{" "}
								we are proud to have you as a part of Alumni
								relation of our school.
							</p>
							<div>
								{checked ? (
									<img
										src={
											// this.state.url ||
											process.env.PUBLIC_URL +
											"/MalePH200x215.png"
											// this.state.imgURL
										}
										alt="Placeholder"
										className="img-fluid"
										id="myimg"
										width="250px"
										// style={{ borderTop: "3px gray solid" }}
									/>
								) : (
									<img
										src={
											process.env.PUBLIC_URL +
											"/FemalePH.png"
										}
										alt="Placeholder"
										className="img-fluid"
										id="myimg"
										width="250px"
									/>
								)}
							</div>
							<div className="p-0">
								<progress
									value={this.state.progress}
									max="200"
									className="progress"
									style={{
										height: "4px",
										display: "inline",
										fontSize: "25px",
									}}
								/>
							</div>
							<div className="file-field big mt-1">
								<label htmlFor="upload-button">
									<FontAwesomeIcon
										icon={faCloudUploadAlt}
										// size="2x"
									/>
								</label>
								<label
									htmlFor="upload-button"
									className="choose-photo"
								>
									<h6
										style={{
											marginBottom: "6px",
											marginTop: "1px",
											// border: "1px dotted",
										}}
									>
										{" "}
										&nbsp; Choose photo &nbsp;{" "}
									</h6>
								</label>
								<input
									type="file"
									id="upload-button"
									multiple
									style={{ display: "none" }}
									onChange={this.handleChange}
								/>
								<button
									onClick={this.handleUpload}
									className="btn alert-danger"
									style={{ padding: 0 }}
								>
									<b>Upload</b>
								</button>
							</div>
							{/* <div>
								<progress
									value={this.state.progress}
									max="100"
									className="progress"
								/>
							</div> */}
						</div>
						{/* <!-- Default form register --> */}
						<div className="col-md-6 align-middle">
							<form
								className="text-center border border-light p-3"
								action="#!"
								// onSubmit={this.handleSubmit}
							>
								<p className="h5 mb-4">About You:</p>

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

								<h5>
									<p> ^_^ Have a nice day! ^_^ </p>
								</h5>
								<hr />
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
					Student has not resisterd yet! Please ask your friend to
					join our alumni network.{" "}
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
	const listOfUsers = state.firestore.data.users;
	const userInfo = listOfUsers ? listOfUsers[id] : null;
	return {
		profiles: state.profile.profiles,
		userInfo: userInfo,
		uid: id,
		// isAuthenticated: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProp),
	firestoreConnect([{ collection: "users" }])
)(UserProfile);
// export default connect(mapStateToProps, mapDispatchToProps)(Profile2);
