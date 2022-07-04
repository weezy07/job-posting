import React from "react";
import './clients.css'

const Clients = () => {
	// icons array list 1
	const clientsIconsFirst = [
		{
			id: 1,
			icon: "../../assets/clients/solaytic.png",
		},
		{
			id: 2,
			icon: "../../assets/clients/kanba.png",
		},
		{
			id: 3,
			icon: "../../assets/clients/lighting.png",
		},
		{
			id: 4,
			icon: "../../assets/clients/ztos.png",
		},
		{
			id: 5,
			icon: "../../assets/clients/kanba.png",
		},
	];

	// // icons array list 2
	const clientsIconsSecond = [
		{
			id: 6,
			icon: "../../assets/clients/goldline.png",
		},
		{
			id: 7,
			icon: "../../assets/clients/ideaa.png",
		},
		{
			id: 8,
			icon: "../../assets/clients/liva.png",
		},
		{
			id: 9,
			icon: "../../assets/clients/velocity-9.png",
		},
	];

	return (
		<div className="container">
			<div className="pad-vertical30">
				<h2 className="homePageSectionHeading clients-headline mg-bottom20">Companies Who Trust Us</h2>

				<div className="clients-row pad-vertical30">
					<div className="clients-rowOne flex-spaceBet">
						{clientsIconsFirst.map((item) => {
							return <img key={item.id} src={item.icon} alt={`Client-${item.id}`} />;
						})}
					</div>
					<div className="clients-rowTwo mg-top20 flex-spaceEven">
						{clientsIconsSecond.map((item) => {
							return <img key={item.id} src={item.icon} alt={`Client-${item.id}`} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
