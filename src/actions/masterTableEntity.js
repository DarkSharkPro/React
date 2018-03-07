import types from '../const';

export const mtEntityAdd = (data) => ({
	type: types.MT_ENTITY_ADD,
	data
});

export const mtEditableEntrySave = ( data ) => ({
	type: types.MT_EDITABLE_ENTRY_SAVE,
	data
});

export const mtEditableEntryDelete = (id) => ({
	type: types.MT_EDITABLE_ENTRY_DELETE,
	id
});

export const mtEditableEntryClose = () => ({
	type: types.MT_EDITABLE_ENTRY_CLOSE
});