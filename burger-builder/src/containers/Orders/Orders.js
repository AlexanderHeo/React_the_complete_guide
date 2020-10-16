import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-order';
import Order from '../../components/Order/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../store/actions/actionIndex';

class Orders extends Component {
	componentDidMount() {
		this.props.onFetchOrders()
	}

	render() {
		let orders = <Spinner />
		if (!this.props.loading) {
			orders = this.props.orders.map(order => (
				<Order
					key={order.id}
					ingredients={order.ingredients}
					price={+order.price} />
			))
		}
		return (
			<div>
				{orders}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		orders: state.orderReducer.orders,
		loading: state.orderReducer.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchOrders: () => dispatch(actionCreators.fetchOrders())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
