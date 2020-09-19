import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {
  // console.log('props.ingredients:', props.ingredients)
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // console.log([...Array(props.ingredients[igKey])])
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
    });
    // console.log('transformedIngredients:', transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
