/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import data from "../../../data/sav10.json";

// const profile = data.profiles;
class BatchTen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log(props);
	}
	render() {
		// console.log(this.props);
		const { studentInfo } = this.props;
		console.log(studentInfo);
		// var names = [
		// 	{
		// 		SNO: "1",
		// 		AdmissionNumber: "SAV-10-01",
		// 		StudentName: "SHUBHAM SUDHANSHU",
		// 		FathersName: "UMESH KUMAR",
		// 	},
		// 	{
		// 		SNO: "2",
		// 		AdmissionNumber: "SAV-10-02",
		// 		StudentName: "VINAY KUMAR",
		// 		FathersName: "LATE DILIP PASWAN",
		// 	},
		// 	{
		// 		SNO: "3",
		// 		AdmissionNumber: "SAV-10-03",
		// 		StudentName: "ANKIT KUMAR",
		// 		FathersName: "AJAY KUMAR CHOUDHARY",
		// 	},
		// ];
		function User(props) {
			// console.log(props);
			return (
				<tr>
					<th scope="row">{props.sno}</th>
					<td>
						<NavLink
							activeClassName="active"
							to={"/profile/" + props.AdmissionNumber}
						>
							{props.AdmissionNumber}
						</NavLink>
					</td>
					<td>{props.name} </td>
					{props.FathersName ? (
						<td>{props.FathersName}</td>
					) : (
						<td>NA</td>
					)}
				</tr>
			);
		}
		return (
			<div className="table-responsive">
				<table className="table table-sm table-hover ml-3">
					<thead>
						<tr>
							<th scope="col">S No.</th>
							<th scope="col">Admission Number</th>
							<th scope="col">Name</th>
							<th scope="col">Father's Name</th>
						</tr>
					</thead>

					<tbody>
						{studentInfo.map((child) => (
							<User
								key={child.SNO}
								AdmissionNumber={child.AdmissionNumber}
								name={child.StudentName}
								sno={child.SNO}
								FathersName={child.FathersName}
							/>
						))}
					</tbody>
				</table>
				{/* <ul>
					{profile.map((s) => (
						<li>{s}</li>
					))}
				</ul> */}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log("hi from batch 10");
	console.log(state);
	return {
		studentInfo: state.profile.profiles,
	};
};
export default connect(mapStateToProps)(BatchTen);
