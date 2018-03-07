import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* mtFetchEntryID({ id }){
	try {
		const { data } = yield instance('mtFetchEntryID', id);
		yield put( actions.mtEditableEntryResponse(data) );
	} catch (e) {
		yield put(actions.notifierSetError({ message: e.message }));
	};
};

export default mtFetchEntryID;