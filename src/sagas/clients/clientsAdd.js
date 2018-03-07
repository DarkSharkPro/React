import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* clientsAdd({ data }){
	try {
		const { data: response } = yield instance('addNewClient', data);
		if ( response.status ){
			yield put( actions.clientsGetSuccess( response.data ) );
			yield put( actions.notifierSetSuccess({ message: 'Клиент успешно добавлен' }) );
		} else {
			throw new Error( response.message || '' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default clientsAdd;