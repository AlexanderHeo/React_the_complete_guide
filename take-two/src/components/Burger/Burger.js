import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])]
        .map((_, i) => {
          return <BurgerIngredient
            key={ingredientKey + i}
            type={ingredientKey}
          />
        })
    });

    /*
    ingredients: {
      salad: 1, bacon:1, cheese: 2, meat: 3
    }
    console.log(transformedIngredients);
    [
      { key: salad0 },
      { key: bacon0 },
      { key: cheese0 }, { key: cheese1 },
      { key: meat0 }, { key: meat1 }, { key: meat2 },
    ];
    */

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
