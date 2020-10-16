import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-order';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/actionIndex';

class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount () {
		this.props.onInitIngredients()
    // axios.get('https://react-my-burger-3ea54.firebaseio.com/ingredients.json')
    //   .then(response => {
    //     this.setState({
    //       ingredients: response.data
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({
    //       error: true
    //     })
    //   });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
      return sum > 0
  }

  // handleAddIngredient = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCount;

  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients,
  //   });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // handleRemoveIngredient = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = { ...this.state.ingredients };
  //   updatedIngredients[type] = updatedCount;

  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients,
  //   });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  handlePurchase = () => {
    this.setState({ purchasing: true });
  };

  handleCancelPurchase = () => {
    this.setState({
      purchasing: false,
    });
  };

  handlePurchaseContinue = () => {
    // const queryParams = [];
    // for(let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = queryParams.join('&');
    // console.log('queryParams:', queryParams)
    // console.log('queryString:', queryString)
    // this.props.history.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString
		// });
		this.props.history.push('/checkout')
  }

  componentWillUnmount () {
    this.setState = (state, callback) => {
      return;
    }
  }

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = this.props.error ? <p style={{textAlign: 'center'}}>Ingredients can't be loaded...</p> : <Spinner />;
    let orderSummary = null;

    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            ordered={this.handlePurchase}
          />
        </>
      );
      orderSummary = <OrderSummary
        ingredients={this.props.ings}
        price={this.props.price}
        purchaseCancelled={this.handleCancelPurchase}
        purchaseContinue={this.handlePurchaseContinue}
      />;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.handleCancelPurchase}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients,
		price: state.totalPrice,
		error: state.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
		onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
		onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
