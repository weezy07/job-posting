import React from "react";
import './whyUs.css'

const WhyUs = () => {

	// list of features
	const features = [
		{
			id: 1,
			title: "Get More Visibility",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
		},
		{
			id: 2,
			title: "Organize Your Candidates",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
		},
		{
			id: 3,
			title: "Verify Their Abilities",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
		},
	];

	return (
		<div className="container">
			<div className="pad-bottom30">
				<h2 className="homePageSectionHeading whyUs-headline mg-bottom20">Why Us</h2>

				<div className="feature-div pad-vertical30">
					{features.map((item) => {
						return (
							<div key={item.id} className="card-item">
								<h4 className="primary-color pad-vertical10 feature-title">{item.title}</h4>
								<p className="pad-vertical10 form-label">{item.content}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
