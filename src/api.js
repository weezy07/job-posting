import { BASE_API } from "./config";

export const getAuthenticated = (loginObj) => {
	return fetch(`${BASE_API}/auth/login`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginObj),
	}).then(async (response) => {
		let modifiedResponse = await response.json();
		if (!response.ok) {
			modifiedResponse.ok = false;
			return modifiedResponse;
		} else {
			modifiedResponse.ok = true;
			return modifiedResponse;
		}
	});
};

export const listJobs = (token, pageNo=1) => {
	return fetch(`${BASE_API}/recruiters/jobs?page=${pageNo}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `${token}`,
		},
	}).then(async (response) => {
		let modifiedResponse = await response.json();
		if (!response.ok) {
			modifiedResponse.ok = false;
			return modifiedResponse;
		} else {
			modifiedResponse.ok = true;
			return modifiedResponse;
		}
	});
};

export const getCandidatesByJob = (token, jobId) => {
	return fetch(`${BASE_API}/recruiters/jobs/${jobId}/candidates`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `${token}`,
		},
	}).then(async (response) => {
		let modifiedResponse = await response.json();
		if (!response.ok) {
			modifiedResponse.ok = false;
			return modifiedResponse;
		} else {
			modifiedResponse.ok = true;
			return modifiedResponse;
		}
	});
};