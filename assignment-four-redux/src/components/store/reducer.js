import * as actionTypes from '../store/actions';

const initialState = {
	persons: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PERSON:
			const newPerson = {
				id: Math.random(),
				name: 'kumquatPeels',
				age: Math.floor(Math.random() * 50)
			};
			return {
				...state,
				persons: state.persons.concat(newPerson)
			}
		case actionTypes.DELETE_PERSON:
			const updatedPersons = state.persons.filter(person => person.id !== action.id)
			return {
				...state,
				persons: updatedPersons
			}
		default:;
		return state;
	}
}

export default reducer;
