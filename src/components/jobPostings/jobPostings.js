import React, { useEffect, useState } from "react";
import { listJobs } from "../../api";
import { Button } from "react-bootstrap";
import "./jobPostings.css";
import ApplicantsModal from "../shared/applicantsModal";
import Header from "../header/header";
import { Link } from 'react-router-dom'
import JobCard from "../shared/jobCard";
import ToastComponent from "../shared/toast";
import { getStorageData } from "../shared/helperFunction";
import {auth_token_key} from "../shared/constants";

const JobPostings = (props) => {
	const [postings, setPostings] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [postingId, setPostingId] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPageCount, setTotalPageCount] = useState(0);
	const [showToast, setShowToast] = useState(props.location.showToast);
	const [user] = useState(getStorageData(auth_token_key));

	// hanlder for closing the modal
	const handleClose = () => {
		setShowModal(false);
		setPostingId("");
	};

	// hanlder for opening the modal
	const handleShow = (postId) => {
		setShowModal(true);
		setPostingId(postId);
	};

	const getJobsList = () => {
		console.log('list jobs')
		listJobs(user.token, currentPage).then((response) => {
			if (response.ok) {
				setPostings(response.data.data);
				let tempCount = Math.ceil(response.data.metadata.count / response.data.metadata.limit);
				setTotalPageCount(tempCount);
			} else {
				console.log("failure", response);
			}
		});
	}

	// api call of fetchingJobs based on page
	useEffect(() => {
		getJobsList();
	}, [currentPage]);

	// handler for setting the toast message
	const handleToast = (title, message) => {
		return <ToastComponent showToast={showToast} title={title} setShowToast={setShowToast} message={message} />;
	};

	return (
		<>
			<div className="upper-div-posting"></div>
			<div className="componentPosition">
				{/* condition for toast */}
				{showToast && handleToast("Login", "You have successfully logged in.")}
				<Header />
				<div className="container">
					<div className="homeDiv mg-top10 mg-bottom20">
						<Link to="/">
							<span className="goHome mg-vertical10">
								<img className="homeIcon" src={"../../assets/icons/home.svg"} alt="Home icon" />
								Home
							</span>
						</Link>
					</div>
					<div>
						<h4 className="no-mg pad-bottom20 jobHeading">Jobs posted by you</h4>

						<div>
							{/* <Row> */}
							{postings.length > 0 ? (
								<>
									<div className="post-grid">
										{postings.map((posting) => {
											return <JobCard key={posting.id} posting={posting} handleShow={handleShow} />;
										})}
									</div>
									{/* pagination */}
									<div className="pad-vertical30 pagination-div">
										{currentPage > 1 && (
											<img src="../../assets/icons/prev.svg" alt="Previous Icon" onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} />
										)}
										<span className="currentPageCounter">{currentPage}</span>
										{currentPage !== totalPageCount && (
											<img src="../../assets/icons/next.svg" alt="Next Icon" onClick={() => setCurrentPage(currentPage + 1)} />
										)}
									</div>
								</>
							) : (
								<div className="noPostDiv">
									<div className="text-center">
										<img className="noPostIcon" src="../../assets/icons/writing.svg" alt="Writing icon" />
										<p className="mg-vertical10 noPostText">Your posted jobs will show here!</p>
										<Button className="primary-cta mg-top10">Post a Job</Button>
									</div>
								</div>
							)}
						</div>

						{postingId && <ApplicantsModal showModal={showModal} setShowModal={setShowModal} handleClose={handleClose} postingId={postingId} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default JobPostings;
