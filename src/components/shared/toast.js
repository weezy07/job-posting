import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastComponent = ({ title, message, showToast, setShowToast }) => {
	return (
		<div>
			<ToastContainer className="p-3" position={"top-end"}>
				<Toast show={showToast} onClose={() => setShowToast(!showToast)} delay={2000} autohide animation>
					<Toast.Header closeButton={true}>
						<h5 className="primary-color no-mg">{title}</h5>
					</Toast.Header>
					<Toast.Body>
						<p className="no-mg form-label">{message}</p>
					</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);
};

export default ToastComponent;
