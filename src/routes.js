import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/home';
import JobPostings from './components/jobPostings/jobPostings';
import Login from './components/login/login';
import PrivateRoute from './privateRoute';

const Routes = () => {
  return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<PrivateRoute path="/jobs-listing" exact component={JobPostings} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default Routes