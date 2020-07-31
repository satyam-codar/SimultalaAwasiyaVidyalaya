/** @format */

import React, { Component } from "react";
import { storage, database } from "../../config/fbconfig";
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
class MainGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			file: null,
			url: null,
			images: [],
		};
		// console.log("this.props");
		// console.log(this.props);
		this.handleChange = this.handleChange.bind(this);
		this.storePhoto = this.storePhoto.bind(this);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	}
	handleChange(e) {
		this.setState({
			file: e.target.files[0],
			url: URL.createObjectURL(e.target.files[0]),
		});
	}
	storePhoto() {
		const key = database.ref().child("images").push().key;
		const img = storage.ref().child("images").child(key);
		img.put(this.state.file).then((snap) => {
			database.ref().child("images").child(key).set({
				url: snap.metadata.downloadURLs,
			});
		});

		this.setState({
			file: null,
			url: null,
		});
	}
	//   deletePhoto(event) {
	//     let uid = this.state.user.uid
	//     let img = event.target.name
	//     storage.ref().child(uid).child(img).delete()
	//     database.ref().child(uid).child(img).remove()
	//   }
	componentDidMount() {
		// console.log(this.state);
		const ref = storage.ref().child("images");
		const { images } = this.state;
		ref.listAll().then(function (res) {
			res.items.forEach(function (itemRef) {
				// console.log("get images ref");
				// console.log(itemRef.toString());

				itemRef.getDownloadURL().then(function (url) {
					// console.log(this.state);
					images.push({ url });
					// console.log("get image url");
					// console.log(url);
					// var img = document.getElementById("myimg");
					// img.src = url;
				});
			});
		});
		// console.log("this.state");
		// console.log(this.state);
		this.setState({ images });
	}
	forceUpdateHandler() {
		this.forceUpdate();
	}
	render() {
		// console.log("Prof here");
		// console.log(this.props);
		// console.log(this.state.images[0]);

		// const previewStyle = {
		// 	maxHeight: "100px",
		// 	maxWidth: "100px",
		// };
		// const imgStyle = {
		// 	width: "200px",
		// };
		var styleImage = {
			border: "1px solid rgba(0,0,0,.125)",
			borderRadius: "2px",
			// maxHeight: "180px",
		};
		return (
			<div style={{ padding: "15px" }}>
				<div className="card">
					<div
						className="card-header p-0"
						style={{ backgroundColor: "#32d49b59" }}
					>
						<h5>Photo Gallery</h5>
					</div>
					<div>
						<div
							className="card-body text-justify p-0"
							style={{ backgroundColor: "#32d49b18" }}
						>
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
										<a href="100_0624.JPG">
											<img
												src={
													process.env.PUBLIC_URL +
													"/100_0624.JPG"
												}
												alt=""
												className="img-fluid"
												style={styleImage}
											/>
										</a>
									</div> */}

									<div className="col-6 col-sm-4 col-md-4 p-1">
										<div className="card text-white bg-light mb-3">
											<div
												className="card-body"
												style={{
													justifyContent: "center",
												}}
											>
												<button
													onClick={
														this.forceUpdateHandler
													}
												>
													View all Images
												</button>

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
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									{this.state.images.map((image) => (
										<div
											key={image.key}
											className="col-6 col-sm-4 col-md-4 p-1"
										>
											<LazyLoad
												once={true}
												key={image.key}
												height={100}
												offset={[-100, 100]}
												placeholder={<Spinner />}
											>
												<a href={image.url}>
													<img
														src={image.url}
														style={styleImage}
														alt=""
														className="img-fluid"
													/>
												</a>
											</LazyLoad>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* /div card body */}

					{/* <div>
						<button onClick={this.forceUpdateHandler}>
							View All
						</button>
					</div>
					<input
						id="input"
						type="file"
						onChange={this.handleChange}
					/>
					<img src={this.state.url} style={previewStyle} alt="" />
					<button onClick={this.storePhoto}>upload</button> */}
				</div>
				{/* / div card */}
			</div>
		);
	}
}

export default MainGallery;
