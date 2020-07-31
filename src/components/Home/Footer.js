/** @format */

import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// npm install --save-dev @iconify/react @iconify/icons-fa-solid
// import { Icon, InlineIcon } from '@iconify/react';
// import cloudUploadAlt from '@iconify/icons-fa-solid/cloud-upload-alt';

import {
	faFacebookF,
	faGooglePlusG,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
	faHome,
	faPhone,
	faEnvelope,
	faPrint,
	faPencilAlt,
	faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

library.add(
	faFacebookF,
	faTwitter,
	faInstagram,
	faGooglePlusG,
	faHome,
	faPhone,
	faEnvelope,
	faPrint,
	faPencilAlt,
	faCloudUploadAlt
);

class Footer extends Component {
	state = {};
	render() {
		return (
			<div>
				{/* <!-- Footer --> */}
				<footer
					className="page-footer font-small blue-grey lighten-5 p-15"
					style={{ paddingLeft: "15px", paddingRight: "15px" }}
				>
					<div style={{ backgroundColor: "#32d49b59" }}>
						<div className="container">
							{/* <!-- Grid row--> */}
							<div className="row py-2 d-flex align-items-center">
								{/* <!-- Grid column --> */}
								<div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
									<h6 className="mb-0">
										Get connected with us on social
										networks!
									</h6>
								</div>
								{/* <!-- Grid column --> */}

								{/* <!-- Grid column --> */}
								<div className="col-md-6 col-lg-7 text-center text-md-right">
									{/* <!-- Facebook --> */}
									<a className="fb-ic" href="//">
										{/* <i className="fab fa-facebook-f white-text mr-4"></i> */}
										<FontAwesomeIcon
											icon={["fab", "facebook-f"]}
											size="2x"
											// transform="left-60 grow-2.5"
											style={{ marginRight: "24px" }}
										/>
									</a>
									{/* <!-- Twitter --> */}
									<a className="tw-ic" href="#!">
										<FontAwesomeIcon
											icon={["fab", "twitter"]}
											size="2x"
											// transform="left-40 grow-2.5"
											style={{ marginRight: "24px" }}
										/>
									</a>
									<a
										className="ins-ic"
										href="https://www.instagram.com/alumni.sav/?hl=en"
									>
										<FontAwesomeIcon
											icon={["fab", "instagram"]}
											size="2x"
											// transform="left-20 grow-2.5"
											style={{ marginRight: "24px" }}
										/>
									</a>
								</div>
								{/* <!-- Grid column --> */}
							</div>
							{/* <!-- Grid row--> */}
						</div>
					</div>

					{/* <!-- Footer Links --> */}
					<div className="container-fluid text-center text-md-left mt-2">
						{/* <!-- Grid row --> */}
						<div className="row dark-grey-text">
							{/* <!-- Grid column --> */}
							<div className="col-md-4 col-lg-4 col-xl-4">
								{/* <!-- Content --> */}
								<h6 className="text-uppercase font-weight-bold">
									Simultala Awasiya Vidyalaya
								</h6>
								<hr
									className="teal accent-3 mb-2 mt-0 d-inline-block mx-auto"
									style={{ width: "120px" }}
								/>
								<p>
									This platform is entirely dedicated to all
									the members of Simulatala Awasiya Vidyalaya.
									This platform will enhance the interaction
									between the school body and the student
									body.
								</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-4 col-lg-4 col-xl-4 mx-auto">
								{/* <!-- Links --> */}
								<h6 className="text-uppercase font-weight-bold ">
									Quick links
								</h6>
								<hr
									className="teal accent-3 mb-2 mt-0 d-inline-block mx-auto"
									style={{ width: "60px" }}
								/>
								<p>
									<NavLink className="dark-grey-text" to="/">
										Home
									</NavLink>
								</p>
								<p>
									<NavLink
										className="dark-grey-text"
										to="gallery"
									>
										Gallery
									</NavLink>
								</p>
								{/* <p>
									<NavLink
										className="dark-grey-text"
										to="/signup"
									>
										Resister
									</NavLink>
								</p> */}
								{/* <p>
									<NavLink
										className="dark-grey-text"
										to="/donate"
									>
										Donate
									</NavLink>
								</p> */}
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0">
								{/* <!-- Links --> */}
								<h6 className="text-uppercase font-weight-bold">
									Contact
								</h6>
								<hr
									className="teal accent-3 mb-2 mt-0 d-inline-block mx-auto"
									style={{ width: "60px" }}
								/>
								<p>
									<FontAwesomeIcon
										icon={"home"}
										// size="2x"
										// // transform="left-20 grow-2.5"
										// style={{ marginRight: "24px" }}
									/>{" "}
									Simultala, Jamui, Bihar India 811310
								</p>
								<p>
									<FontAwesomeIcon icon={"envelope"} />{" "}
									alumni.sav@gmail.com
								</p>
								<p>
									<FontAwesomeIcon icon={"phone"} /> +91
									7372959343
								</p>
								<p>
									<FontAwesomeIcon icon={"print"} /> + 01 234
									567 89
								</p>
							</div>
							{/* <!-- Grid column --> */}
						</div>
						{/* <!-- Grid row --> */}
					</div>
					{/* <!-- Footer Links --> */}

					{/* <!-- Copyright --> */}
					<div className="footer-copyright text-center text-black-50">
						© 2020 Copyright:{" "}
						<small>
							<a href="https://www.instagram.com/satyamcheeku/?hl=en">
								Satyam Kumar
							</a>
						</small>
					</div>
					{/* <!-- Copyright --> */}
				</footer>
				{/* <!-- Footer --> */}
			</div>
		);
	}
}

export default Footer;
