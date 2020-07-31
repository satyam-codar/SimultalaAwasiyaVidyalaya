/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/dummyData";
import LazyLoad from "react-lazyload";

const Spinner = () => (
	<div className="post loading">
		<svg
			width="80"
			height="80"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx="50"
				cy="50"
				fill="none"
				stroke="#49d1e0"
				strokeWidth="10"
				r="35"
				strokeDasharray="164.93361431346415 56.97787143782138"
				transform="rotate(275.845 50 50)"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					calcMode="linear"
					values="0 50 50;360 50 50"
					keyTimes="0;1"
					dur="1s"
					begin="0s"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	</div>
);
var styleImage = {
	border: "1px solid rgba(0,0,0,.125)",
	borderRadius: "2px",
	// maxHeight: "180px",
};
const Post = ({ id, imgsrc }) => (
	<div className="col-6 col-sm-4 col-md-4 p-1">
		<LazyLoad
			once={true}
			key={id}
			height={100}
			offset={[-100, 100]}
			placeholder={<Spinner />}
		>
			<a href="100_0624.JPG">
				<img
					src={imgsrc}
					className="img-fluid"
					style={styleImage}
					alt="Forest"
				/>
			</a>
		</LazyLoad>
	</div>
);

class GalleryPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<div
					className="container-fluid"
					style={{ backgroundColor: "#afd6c950" }}
				>
					<div className="row">
						{data.map((post) => (
							// <LazyLoad
							// 	key={post.id}
							// 	height={100}
							// 	offset={[-100, 100]}
							// 	placeholder={<Spinner />}
							// >
							<Post key={post.id} {...post} />
							// </LazyLoad>
						))}
						{/* <div className="col-6 col-sm-4 col-md-4 p-1">
							<a target="_blank" href="DSCN3633.JPG">
								<img
									src={
										process.env.PUBLIC_URL + "/DSCN3633.JPG"
									}
									className="img-fluid"
									style={styleImage}
									alt="Forest"
								/>
							</a>
						</div> */}
						<div className="col-6 col-sm-4 col-md-4 p-1">
							<div className="card text-white bg-light mb-3">
								<div
									className="card-body"
									style={{ justifyContent: "center" }}
								>
									<NavLink to="/gallery">
										<b>View All </b>{" "}
										<b>
											<svg
												width="1em"
												height="1em"
												viewBox="0 0 16 16"
												className="bi bi-arrow-bar-right"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
												/>
												<path
													fillRule="evenodd"
													d="M6 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H6.5A.5.5 0 0 1 6 8zm-2.5 6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5z"
												/>
											</svg>
										</b>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GalleryPreview;
