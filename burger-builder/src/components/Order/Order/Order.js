import React from 'react';
import classes from './Order.css';

const order = (props) => {
//   let ingredients = Object.keys(props.ingredients)
//     .map((igKey) => {
//       // console.log([...Array(props.ingredients[igKey])])
//       return [...Array(props.ingredients[igKey])].map((_, i) => {
//         return <BurgerIngredient key={igKey + i} type={igKey} />;
//       });
//     })
//     .reduce((arr, el) => {
//       return arr.concat(el);
//     }, []);
//   // console.log('ingredients:', ingredients);
//   if (ingredients.length === 0) {
//     ingredients = <p>Please start adding ingredients</p>;
//   }
    let ingredients = [];
    for (let ingredient in props.ingredients) {
        ingredients.push({
            name: ingredient,
            amount:props.ingredients[ingredient]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} - {ig.amount}</span>
    })

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        </div>
    )
}


export default order;
