//Action Types
export const SET_TOKEN = "SET_TOKEN";


//Action Creator
export const setToken = (payload) => ({
	type: SET_TOKEN,
	payload: payload
});