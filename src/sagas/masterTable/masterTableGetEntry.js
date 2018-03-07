import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* masterTableGetEntry({ data }){
	try {
		const { data: response } = yield instance('masterTableGetEntry', { ...data });
		yield put( actions.masterTableGetEntrySuccess(response) );
	} catch (e) {
		yield put(actions.notifierSetError({ message: e.message }));
	};
};

export default masterTableGetEntry;