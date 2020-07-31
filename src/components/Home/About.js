/** @format */

import React, { Component } from "react";
import GalleryPreview from "../All/SMGallery";

class About extends Component {
	state = {};
	render() {
		return (
			<div className="container-fluid">
				<div id="accordion">
					<div className="card">
						<div
							className="card-header p-0"
							style={{ backgroundColor: "#32d49b59" }}
							id="headingOne"
						>
							{/* <h5 className="mb-0"> */}
							<button
								className="btn btn-link"
								data-toggle="collapse"
								data-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								{/* <span className="caret"></span> */}
								<h5>
									About{" "}
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 16 16"
										className="bi bi-caret-down-fill"
										fill="currentColor"
									>
										<path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
									</svg>
								</h5>
								{/* Collapsible Group Item #1 */}
							</button>
							{/* </h5> */}
						</div>

						<div
							id="collapseOne"
							className="collapse show"
							aria-labelledby="headingOne"
							data-parent="#accordion"
						>
							<div
								className="card-body text-justify"
								style={{ backgroundColor: "#32d49b18" }}
							>
								In the year 2000, after Jharkhand separated from
								Bihar and got its independent existence,
								realization struck that schools which were
								established to provide a firm ground to
								meritorious students like the Indira Gandhi
								Residential School, Hazaribagh for girls and
								Bihar’s pride Netarhat School have both gone
								under Jharkhand. Since that time itself, an
								urgent need has been felt to establish schools
								which would eliminate the vacuum created by
								Netarhat and Indira Gandhi Awasiya Vidyalaya.
								The human resource development department
								started working in this direction henceforth. On
								12th August, 2009 some exuberant/enthusiastic
								alumni of Netarhat, on the initiative and
								invitation of Honorable Chief Minister of Bihar,
								Shri Nitish Kumar, came forward to help the
								state government by adopting roles suitable for
								them on the basis of their experience at
								Netarhat. Taking into consideration the need of
								the present circumstances it was accepted by
								general consensus that the medium of instruction
								would be English. On the suggestion of Shri
								Nitish Kumar, Hon Chief Minister of Bihar in the
								meeting of 29th of August, 2009 it was also
								decided that only one school would be opened
								that would be co-educational and would provide a
								common platform to both meritorious boys and
								girls to garner quality education under the
								guidance of qualified and experienced teachers
								chosen from all over the country. Under the
								guidance of State Government’s Human Resource
								Department’s Principal Secretary Shri Anjani
								Kumar Singh, the officials of the department
								started work in this direction and set the
								wheels in motion in a record time of less than a
								year. The first batch of 120 students reached
								Simultala on 6/7th of August, 2010 and on 9th of
								August, 2010, the Chief Minister of Bihar, Shri
								Nitish Kumar officially inaugurated Simultala
								Awasiya Vidyalaya and gave an effective gift/a
								gift full of promises for the future of Bihar.
							</div>
						</div>
					</div>
					<div className="card">
						<div
							className="card-header p-0"
							style={{ backgroundColor: "#32d49b59" }}
							id="headingTwo"
						>
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									<h5>
										Other heading #2{" "}
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-caret-down-fill"
											fill="currentColor"
										>
											<path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
										</svg>
									</h5>
								</button>
							</h5>
						</div>
						<div
							id="collapseTwo"
							className="collapse"
							aria-labelledby="headingTwo"
							data-parent="#accordion"
						>
							<div
								className="card-body text-justify"
								style={{ backgroundColor: "#32d49b18" }}
							>
								Anim pariatur cliche reprehenderit, enim eiusmod
								high life accusamus terry richardson ad squid. 3
								wolf moon officia aute, non cupidatat skateboard
								dolor brunch. Food truck quinoa nesciunt laborum
								eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
								put a bird on it squid single-origin coffee
								nulla assumenda shoreditch et. Nihil anim
								keffiyeh helvetica, craft beer labore wes
								anderson cred nesciunt sapiente ea proident. Ad
								vegan excepteur butcher vice lomo. Leggings
								occaecat craft beer farm-to-table, raw denim
								aesthetic synth nesciunt you probably haven't
								heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="card">
						<div
							className="card-header p-0"
							style={{ backgroundColor: "#32d49b59" }}
							id="headingThree"
						>
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									<h5>
										Other heading #3{" "}
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-caret-down-fill"
											fill="currentColor"
										>
											<path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
										</svg>
									</h5>
								</button>
							</h5>
						</div>
						<div
							id="collapseThree"
							className="collapse"
							aria-labelledby="headingThree"
							data-parent="#accordion"
						>
							<div
								className="card-body text-justify"
								style={{ backgroundColor: "#32d49b18" }}
							>
								Anim pariatur cliche reprehenderit, enim eiusmod
								high life accusamus terry richardson ad squid. 3
								wolf moon officia aute, non cupidatat skateboard
								dolor brunch. Food truck quinoa nesciunt laborum
								eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
								put a bird on it squid single-origin coffee
								nulla assumenda shoreditch et. Nihil anim
								keffiyeh helvetica, craft beer labore wes
								anderson cred nesciunt sapiente ea proident. Ad
								vegan excepteur butcher vice lomo. Leggings
								occaecat craft beer farm-to-table, raw denim
								aesthetic synth nesciunt you probably haven't
								heard of them accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="card">
						<div
							className="card-header p-0"
							style={{ backgroundColor: "#32d49b59" }}
							id="headingFour"
						>
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									data-toggle="collapse"
									data-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									<h5>
										Photo Gallery{" "}
										<svg
											width="1em"
											height="1em"
											viewBox="0 0 16 16"
											className="bi bi-caret-down-fill"
											fill="currentColor"
										>
											<path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
										</svg>
									</h5>
								</button>
							</h5>
						</div>
						<div
							id="collapseFour"
							className="collapse"
							aria-labelledby="headingFour"
							data-parent="#accordion"
						>
							<div
								className="card-body text-justify p-0"
								style={{ backgroundColor: "#32d49b18" }}
							>
								<GalleryPreview />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
