import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/pages/sign-inand-sign-up/sign-inand-sign-up.component';
function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
