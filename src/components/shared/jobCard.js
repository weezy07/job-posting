import React from 'react'
import { Button } from 'react-bootstrap'
import '../jobPostings/jobPostings.css'

const JobCard = ({ posting, handleShow }) => {
	return (
		<div key={posting?.id} className="jobPostCard mg-bottom20">
			<h4 className="pad-vertical10 post-title jobTitle">{posting?.title}</h4>
			<p className="pad-vertical10 jobDescText">{posting?.description}</p>

			<div className="flex-spaceBet">
				<p className="location-div">
					<img className="location-icon" src={"../../assets/icons/location.svg"} alt="Location icon" />
					<span className="form-label opacity8">{posting?.location}</span>
				</p>
				<Button className="cta-viewApplications" onClick={() => handleShow(posting?.id)}>
					View Applications
				</Button>
			</div>
		</div>
	);
};

export default JobCard