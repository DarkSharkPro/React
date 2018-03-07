import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* clientsSearch({ data }){
	try {
		const { data } = yield instance('clients_search', data);

		yield put( actions.addresseesGetSuccess() );
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default clientsSearch;