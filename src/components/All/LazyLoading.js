/** @format */

import React from "react";
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

const Post = ({ id, title, body, imgsrc }) => (
	<div className="post">
		<LazyLoad
			once={true}
			placeholder={
				<img src={`https://picsum.photos/id/${id}/5/5`} alt="..." />
			}
		>
			<div className="post-img">
				{/* <img src={`https://picsum.photos/id/${id}/100/100`} alt="..." /> */}
				<img
					src={imgsrc}
					className="img-fluid"
					// style={styleImage}
					alt="Forest"
				/>
			</div>
		</LazyLoad>
		{/* <div className="post-body">
			<h4>{title}</h4>
			<p>{body}</p>
			<img
				src={imgsrc}
				className="img-fluid"
				// style={styleImage}
				alt="Forest"
			/>
		</div> */}
	</div>
);

const LazyLoading = () => (
	<div className="App">
		<h2>LazyLoad Demo</h2>
		<div className="post-container">
			{data.map((post) => (
				<LazyLoad
					key={post.id}
					height={100}
					offset={[-100, 100]}
					placeholder={<Spinner />}
				>
					<Post key={post.id} {...post} />
				</LazyLoad>
			))}
		</div>
	</div>
);

export default LazyLoading;
