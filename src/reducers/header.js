import types from '../const';

const initialState = {
	items: []
};

const header = (state = initialState, action) => {
	switch (action.type){
		case types.GET_MAIN_HEADER_SUCCESS:
			return {
				...state,
				items: action.list
			};
		default:
			return state;
	}
};

export default header;