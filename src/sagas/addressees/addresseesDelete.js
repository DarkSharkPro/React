import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* addresseesDelete({ id }) {

	const isConfirm = window.confirm('Вы хотите удалить адресата?');
	if ( !isConfirm ) return false;

	try {
		const { data } = yield instance( 'deleteContact', { id } );

		if ( data.status ){
			yield put( actions.addresseesGet() );
			yield put( actions.addresseesEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Адресат успешно удален' }) );
		} else {
			throw new Error(data.message || '')
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default addresseesDelete;