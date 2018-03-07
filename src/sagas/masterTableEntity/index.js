import { takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import types from '../../const';
import mtEntityAdd from './mtEntityAdd';
import findSuggestion from './findSuggestion';
import mtFetchEntryID from './mtFetchEntryID';
import mtEditableEntrySave from './mtEditableEntrySave';
import mtEditableEntryDelete from './mtEditableEntryDelete';

export default function* masterTableEntity() {
	yield takeEvery(types.MT_ENTITY_ADD, mtEntityAdd);
	yield throttle(1000, types.SUGGESTION_REQUEST, findSuggestion);
	yield takeLatest(types.MT_FETCH_ENTRY_ID, mtFetchEntryID);
	yield takeEvery(types.MT_EDITABLE_ENTRY_SAVE, mtEditableEntrySave);
	yield takeEvery(types.MT_EDITABLE_ENTRY_DELETE, mtEditableEntryDelete);
};