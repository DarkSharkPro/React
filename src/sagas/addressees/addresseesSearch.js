import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* addresseesSearch({ data }){
	try {
		const { data } = yield instance('addressees_search', data);

		if (data.status) {
			yield put( actions.addresseesGetSuccess() );
		} else {
			throw new Error(data.message || '');
		};
	} catch (e) {
		yield put(actions.notifierSetError({ message: e.message }));
	};
};

export default addresseesSearch;