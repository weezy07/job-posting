import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { getCandidatesByJob } from "../../api";
import ApplicantCard from "./applicantCard";
import './shared.css'
import '../jobPostings/jobPostings.css'
import {getStorageData} from "./helperFunction";
import {auth_token_key} from "./constants";

const ApplicantsModal = ({ showModal, handleClose, postingId }) => {
	const [count, setCount] = useState(0);
	const [jobDetails, setJobDetails] = useState([]);
	const [user] = useState(getStorageData(auth_token_key));

	// fetching candidates by jobId
	useEffect(() => {
		getCandidatesByJob(user.token, postingId).then((response) => {
			if (response.ok) {
				setJobDetails(response.data);
				setCount(response.data.length);
			} else {
				console.log("failure", response);
			}
		});
	}, [postingId]);

	return (
		<div>
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h6 className="no-mg jobTitle">Applicants for this job</h6>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="mg-vertical10 form-label">{count ? `Total ${count} applicants` : `0 applicants`}</p>

					<div className="applicant-div">
						{jobDetails.length > 0 ? (
							<div className="card-grid2">
								{jobDetails.map((item) => (
									<ApplicantCard key={item.id} item={item} />
								))}
							</div>
						) : (
							<div className="noPostParent">
								<div className="text-center">
									<img className="noPostIcon" src="../../assets/icons/curriculum.svg" alt="Curriculum icon" />
									<p className="mg-vertical20 noPostText">No applications available!</p>
								</div>
							</div>
						)}
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ApplicantsModal;
