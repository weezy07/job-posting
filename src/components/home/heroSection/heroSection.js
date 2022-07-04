import React from 'react';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {isAuthenticated} from '../../shared/helperFunction';
import './heroSection.css'

const HeroSection = () => {
  return (
		<div className="container">
			<div className="hero-parent pad-top40 flex-spaceBet">
				{/* left section */}
				<div className="hero-left-section">
					<h1 className="headline pad-vertical40">
						Welcome to My<span className="primary-color">Jobs</span>
					</h1>

					{/* routing condition on the basis of authentication */}
					<Link to={`${isAuthenticated() ? "/jobs-listing" : "/login"}`}>
						<Button className="primary-cta mg-top10">Get Started</Button>
					</Link>
				</div>

				{/* right section */}
				<div className="hero-right-section">
					<img className="hero-picture" src={"../../assets/homepage/hero-picture.png"} alt="Hero" />
				</div>
			</div>
		</div>
	);
}

export default HeroSection