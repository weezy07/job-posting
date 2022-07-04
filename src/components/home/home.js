import React, { useState } from 'react'
import Header from '../header/header';
import ToastComponent from '../shared/toast';
import Clients from './clients/clients'
import HeroSection from './heroSection/heroSection';
import WhyUs from './whyUs/whyUs'

const Home = (props) => {

	const [showToast, setShowToast] = useState(props.location.showToast);

	// handler for setting the toast message
	const handleToast = (title, message) => {
		return <ToastComponent showToast={showToast} title={title} setShowToast={setShowToast} message={message} />;
	};

	return (
		<React.Fragment>
			<div className="upper-div"></div>
			<div className="componentPosition">
				{/* condition for toast */}
				{showToast && handleToast("Logout", "You have successfully logged out.")}
				<Header />
				<HeroSection />
				<WhyUs />
				<Clients />
			</div>
		</React.Fragment>
	);
}

export default Home