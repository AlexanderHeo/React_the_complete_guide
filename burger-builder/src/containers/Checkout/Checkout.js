import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	handleCheckoutCancelled = () => {
		this.props.history.goBack();
	}

	handleCheckoutContinue = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render() {
		let summary = <Redirect to="/" />
		if (this.props.ings) {
			const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
			summary = <div>
				{purchasedRedirect}
				<CheckoutSummary
					ingredients={this.props.ings}
					checkoutCancelled={this.handleCheckoutCancelled}
					checkoutContinue={this.handleCheckoutContinue}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					component={ContactData}
				/>
			</div>
		}
		return summary
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilderReducer.ingredients,
		purchased: state.orderReducer.purchased
	}
}

export default connect(mapStateToProps)(Checkout);
