import React, { useEffect } from "react";
import "./header.css";
import "../shared/shared.css";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { getStorageData, isAuthenticated, removeStorageData } from "../shared/helperFunction";
import {auth_token_key} from "../shared/constants";

const Header = () => {
	const history = useHistory();

	// handler which return true if pathname is of login page
	const isLoginRoute = () => {
		if (window.location.pathname === "/login") {
			return true;
		}
		return false;
	};

	// handler for logout
	const handleLogout = () => {
		removeStorageData(auth_token_key);
		history.push({
			pathname: `/`,
			showToast: true,
		});
	}

	useEffect(() => {
		isLoginRoute();
		isAuthenticated();
	});

	return (
		<header className="top-header flex-spaceBet">
			<Link to="/">
				<img className="brand-logo" src={"../../assets/icons/brand-logo.svg"} alt="MyJobs Brand Logo" />
			</Link>

			{isAuthenticated() ? (
				<div>
					<div className="candProfile">
						<Dropdown>
							<Dropdown.Toggle className="userName">
								<div className="candidateInitial" id="dropdown-basic">
									{/* return first letter of the logged-in username */}
									{getStorageData(auth_token_key)?.name.substr(0, 1).toUpperCase()}
								</div>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			) : (
				<Link to="/login" style={isLoginRoute() ? { display: "none" } : { display: "block" }}>
					<Button className="cta-login">Login/Signup</Button>
				</Link>
			)}
		</header>
	);
};

export default Header;
