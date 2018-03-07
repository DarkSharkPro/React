import { takeEvery, throttle } from 'redux-saga/effects';
import types from '../../const';
import getMasterTableHeader from './getMasterTableHeader';
import masterTableGetEntry from './masterTableGetEntry';
import mtEntrySearch from './mtEntrySearch';

export default function* masterTable() {
	yield takeEvery(types.GET_MASTER_TABLE_HEADER, getMasterTableHeader);
	yield takeEvery(types.MASTER_TABLE_GET_ENTRY, masterTableGetEntry);
	yield throttle(700, types.MT_ENTRY_SEARCH, mtEntrySearch);
};