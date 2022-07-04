import { auth_token_key } from "./constants";

// helper function used to set data to localStorage
export const setStorageData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

// helper function used to get data from localStorage
export const getStorageData = (key) => {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
}

// helper function used to remove data from localStorage
export const removeStorageData = (key) => {
    localStorage.removeItem(key);
}

// returns boolean based on user loggedIn status
export const isAuthenticated = () => {
	if (getStorageData(auth_token_key)?.token) {
		return true
	}
	return false;
};