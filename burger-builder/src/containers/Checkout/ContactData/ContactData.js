import React, { Component } from 'react';
import axios from '../../../axios-order';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            postalCode: ''
        },
        loading: false
    }

    handleOrder = (e) => {
      e.preventDefault();
      // console.log(this.props.ingredients);
      //   alert('You made a purchase!');
      this.setState({loading: true});
      const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
          name: 'Alex',
          address: {
            street: 'Fulcrum Ave',
            zipCode: '66',
            city: 'Rebel City'
          },
          email: 'fulcrum@rebel.com'
        },
        deliveryMethod: 'Uber Eats'
      };

      axios.post('/orders.json', order)
        .then(response => {
          this.setState({ loading: false });
          this.props.history.push('/');
        })
        .catch(error => {
          this.setState({ loading: false })
        });
    }

    render() {
      let form = (
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="your name"
          />
          <input
            className={classes.Input}
            type="text"
            name="email"
            placeholder="your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="your street"
          />
          <input
            className={classes.Input}
            type="text"
            name="city"
            placeholder="your city"
          />
          <input
            className={classes.Input}
            type="text"
            name="postalCode"
            placeholder="your zip code"
          />
          <Button btnType="Success" clicked={this.handleOrder}>
            ORDER
          </Button>
        </form>
      );
      if (this.state.loading) {
        form = <Spinner />
      }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data:</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
