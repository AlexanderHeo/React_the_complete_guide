import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    // state = {
    //     ingredients: {
    //         salad: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         meat: 0
    //     },
    //     price: 0
    // }

    // componentDidMount() {
    //     // console.log('props in [Checkout]:', this.props)
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ ingredients: ingredients, price: price });
    // }

    handleCheckoutCancelled = () => {
        this.props.history.goBack();
    }

    handleCheckoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.handleCheckoutCancelled}
                    checkoutContinue={this.handleCheckoutContinue}
                />
								<Route
									path={this.props.match.path + '/contact-data'}
									component={ContactData} />
                {/* <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.props.ings} price={this.state.price} {...props}/>)} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients
	}
}

export default connect(mapStateToProps)(Checkout);
