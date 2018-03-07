import types from '../const';

const initialState = {
	list: [],
	timeout: 2100
};

const notifiers = (state = initialState, action ) => {
	switch (action.type){
		case types.NOTIFIER_SET_SUCCESS:
		case types.NOTIFIER_SET_ERRORR: {
			const list = [{
				id: Date.now(),
				noteClass: action.data.noteClass,
				message: action.data.message || ''
			}].concat( state.list );
			return {
				...state,
				list
			}
		}
		case types.NOTIFIER_DELETE: {
			return {
				...state,
				list: state.list.filter( el => el.id !== action.id )
			}
		}
		default:
			return state;
	}
};

export default notifiers;