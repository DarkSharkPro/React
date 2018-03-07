import types from '../const';

export const getMasterTableHeader = () => ({
	type: types.GET_MASTER_TABLE_HEADER
});

export const setMasterTableHeader = ( tableHeader ) => ({
	type: types.SET_MASTER_TABLE_HEADER,
	tableHeader
});

export const MTServicesGetSuccess = ( data ) => ({
	type: types.MT_SERVICES_GET_SUCCESS,
	data
});

export const masterTableGetEntry = ( data ) => ({
	type: types.MASTER_TABLE_GET_ENTRY,
	data
});

export const masterTableGetEntrySuccess = ( data ) => ({
	type: types.MASTER_TABLE_GET_ENTRY_SUCCESS,
	data
});

export const mtFetchEntryID = ( id ) => ({
	type: types.MT_FETCH_ENTRY_ID,
	id
});

export const mtEditableEntryResponse = ( data ) => ({
	type: types.MT_EDITABLE_ENTRY_RESPONSE,
	data
});

export const mtEntrySearch = ( data ) => ({
	type: types.MT_ENTRY_SEARCH,
	data
});

export const mtEntryAdd = (data) => ({
	type: types.MT_ENTRY_ADD,
	data
});

export const masterTableReset = () => ({
	type: types.MASTER_TABLE_RESET
});
