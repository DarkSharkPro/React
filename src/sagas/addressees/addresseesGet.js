import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* addresseesGet(){
	try {
		const { data = [] } = yield instance('getContacts');
		yield put( actions.addresseesGetSuccess(data) );
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default addresseesGet;