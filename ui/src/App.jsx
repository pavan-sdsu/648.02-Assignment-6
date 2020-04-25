/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "no-alert": "off" */

// eslint-disable-next-line react/prefer-stateless-function

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Navbar from './Navbar.jsx'
import ProductList from './ProductList.jsx'
import ProductEdit from './ProductEdit.jsx'
import ProductView from './ProductView.jsx'

const NotFound = () => <h1>Page Not Found</h1>;

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<div className="container-fluid">
					<Switch>
						<Redirect exact from="/" to="/products" />
						<Route path="/products" component={ProductList} />
						<Route path="/edit/:id" component={ProductEdit} />
						<Route path="/view/:id" component={ProductView} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
