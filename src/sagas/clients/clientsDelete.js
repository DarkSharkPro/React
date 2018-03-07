import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* clientsDelete({ id }){

	const isConfirm = window.confirm('Вы хотите удалить Клиента?');
	if ( !isConfirm ) return false;

	try {
		const { data } = yield instance( 'deleteClient', { id } );

		if ( data.status ){
			yield put( actions.clientsGet() );
			yield put( actions.clientsEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Клиент успешно удален' }) );
		} else {
			throw new Error(data.message || '')
		};

	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default clientsDelete;