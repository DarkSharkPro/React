import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* addresseesAdd({ data }) {
	try {
		const { data: response } = yield instance('addNewContact', data);
		if ( response.status ){
			yield put( actions.addresseesGetSuccess( response.data ) );
			yield put( actions.notifierSetSuccess({ message: 'Адресат успешно добавлен' }) );
		} else {
			throw new Error( response.message || '' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default addresseesAdd;