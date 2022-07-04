import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getAuthenticated } from "../../api";
import { setStorageData } from "../shared/helperFunction";
import { useHistory } from "react-router-dom";
import './login.css'
import { auth_token_key } from "../shared/constants";
import Header from "../header/header";

const Login = () => {
	const [formValues, setFormValues] = useState({
		email: '',
		password: ''
	})
	const [validated, setValidated] = useState(false);
	const [hasError, setHasError] = useState(false);
	const history = useHistory();

	const { email, password } = formValues;

	// handler for setting form values
	const handleChange = (name) => (event) => {
		const value = event.target.value;
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	// handler to submit the form
	const handleSubmit =  (event) => {
		event.preventDefault();

		if(email && password) {
			getAuthenticated(formValues).then((response) => {
				if (response.ok) {
					setValidated(true);
					setHasError(true);
					let authObj = {
						name: response.data.name,
						userRole: response.data.userRole,
						token: response.data.token,
					};
					setStorageData(auth_token_key, authObj);
					history.push({
						pathname: `/jobs-listing`,
						showToast: true,
					});
				} else {
					setHasError(true);
					setValidated(false);
				}
			});
		}
	};

	return (
		<>
			<div className="upper-div-login"></div>
			<div className="componentPosition">
				<Header />

				<div className="container">
					<div className="login-card-item loginForm mg-top70">
						<h5 className="mg-vertical10">Login</h5>
						<Form className="pad-vertical10" validated={validated} onSubmit={handleSubmit}>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								required
								type="email"
								value={email}
								className={hasError ? "form-control errorBorder" : ""}
								onChange={handleChange("email")}
								placeholder="mail@email.com"
							/>

							<Form.Label className="mg-top20">Password</Form.Label>
							<Form.Control
								required
								type="password"
								value={password}
								className={hasError ? "form-control errorBorder" : ""}
								onChange={handleChange("password")}
								placeholder=""
							/>

							{hasError && <p className="no-mg errorMessage">Incorrect email address or password.</p>}
							<div className="text-center">
								<Button type="submit" className="primary-cta mg-vertical30">
									Login
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
