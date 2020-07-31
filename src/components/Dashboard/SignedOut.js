/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const SignedOut = () => {
	var divStyle = {
		// color: 'white',
		// backgroundImage: 'url(' + imgUrl + ')',
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px",
		// backgroundColor: "blue",
	};
	return (
		<div>
			<div className="row">
				<div className="col-6 col-md-12" style={divStyle}>
					<NavLink to="/signup">
						<b>SignUp</b>{" "}
					</NavLink>
				</div>
				<div className="col-6 col-md-12" style={divStyle}>
					<NavLink to="/signin">
						<b>Login</b>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default SignedOut;
