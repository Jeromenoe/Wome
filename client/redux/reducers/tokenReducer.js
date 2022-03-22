import { SET_TOKEN } from '../actions/tokenActions';


const tokenReducer = (state = { value: null }, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return { ...state, value: action.payload.token };
		default:
			return { ...state };
	}
};

export default tokenReducer;