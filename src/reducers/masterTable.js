import types from '../const';

const initialState = {
	tableHeader: null,
	tableEntry: null,
	editingItem: null,
	services: null
};

const masterTable = (state = initialState, action) => {
	switch (action.type){
		case types.SET_MASTER_TABLE_HEADER:
			return {
				...state,
				tableHeader: action.tableHeader
			}
		case types.MT_SERVICES_GET_SUCCESS:
			return {
				...state,
				services: action.data
			}
		case types.MASTER_TABLE_GET_ENTRY_SUCCESS:
			return {
				...state,
				tableEntry: action.data
			}
		case types.MT_EDITABLE_ENTRY_RESPONSE:
			return {
				...state,
				editingItem: action.data
			}
		case types.MT_EDITABLE_ENTRY_CLOSE:
			return {
				...state,
				editingItem: null
			}
		case types.MASTER_TABLE_RESET:
			return initialState
		default:
			return state;
	}
};

export default masterTable;