import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* mtEntrySearch({ data }){
	try {
		const { data: response } = yield instance('getTable', data);
		yield put( actions.mtEntrySearchSuccess(response) );
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default mtEntrySearch;