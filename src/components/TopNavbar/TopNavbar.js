/** @format */

import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);

const TopNavbar = (props) => {
	return (
		<div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
			<div className="page-header">
				<div className="row jumbotron py-2 mb-1 pr-1">
					<div className="col-4 col-sm-4 col-md-2 col-lg-2">
						<img
							src={process.env.PUBLIC_URL + "/savlogo134.png"}
							className="img-fluid"
							// width="50%"
							// height="auto"
							alt="sav-logo"
						/>
					</div>
					{/* <div className="col"> col-sm-4 col-md-4 col-lg-4</div> */}
					<div className="col-8 col-sm-8 col-md-10 col-lg-10">
						<h2 style={{ fontsize: "10vw" }}>
							Alumni Relations, Simultala Awasiya Vidyalaya
						</h2>
						<small>Simultala, Jamui, Bihar</small>
					</div>
				</div>
			</div>
			{/* <!-- Top Navbar --> */}
			<nav
				className="navbar navbar-expand-lg navbar-light py-0"
				style={{ backgroundColor: "#32d49b59" }}
			>
				<NavLink className="nav-link" to="/">
					{/* SAV */}
					<img
						src={process.env.PUBLIC_URL + "/savlogo.png"}
						className="savlogo"
						width="40px"
						alt="SAV"
					/>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul
						className="navbar-nav mr-auto"
						style={{ textEmphasisColor: "black" }}
					>
						<li className="nav-item active">
							<NavLink className="nav-link" to="/">
								{/* Home <span className="sr-only">(current)</span> */}
								<FontAwesomeIcon icon={"home"} />
								<span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item" style={{ textcolor: "black" }}>
							<NavLink
								className="nav-link color"
								to="/magazine"
								style={{ color: "black" }}
							>
								Magazine
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link color"
								to="/donate"
								style={{ color: "black" }}
							>
								Donate
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/gallery"
								style={{ color: "black" }}
							>
								Gallery
							</NavLink>
						</li>
						<li className="nav-item dropdown">
							<NavLink
								className="nav-link dropdown-toggle"
								to="events"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{ color: "black" }}
							>
								Events
							</NavLink>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<NavLink
									className="dropdown-item"
									to="#"
									style={{ color: "black" }}
								>
									Comming Soon
								</NavLink>
								<NavLink
									className="dropdown-item"
									to="#"
									style={{ color: "black" }}
								>
									Comming Soon
								</NavLink>
								<div className="dropdown-divider"></div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<NavLink
								className="nav-link dropdown-toggle"
								to="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{ color: "black" }}
							>
								Alumni Network
							</NavLink>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<NavLink
									className="dropdown-item"
									to="/alumni/2010"
								>
									2010 Batch
								</NavLink>
								<NavLink
									className="dropdown-item"
									to="/alumni/2011"
								>
									2011 Batch
								</NavLink>
								<NavLink
									className="dropdown-item"
									to="/alumni/2012"
								>
									2012 Batch
								</NavLink>
								<NavLink
									className="dropdown-item"
									to="/alumni/2013"
								>
									2013 Batch
								</NavLink>
								<NavLink className="dropdown-item" to="/2014">
									2014 Batch
								</NavLink>
								<NavLink
									className="dropdown-item"
									to="/alumni/2014"
								>
									2014
								</NavLink>
								<div className="dropdown-divider"></div>
							</div>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</nav>
			{/* <!-- / Top-Navbar --> */}
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {};
};

export default connect(mapStateToProps)(TopNavbar);
