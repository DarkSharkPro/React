import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* couriersDelete({ id }){

	const isConfirm = window.confirm('Вы хотите удалить курьера?');
	if ( !isConfirm ) return false;

	try {
		const { data } = yield instance('deleteCourier', {id});
		if (data.status){
			yield put( actions.couriersGet() );
			yield put( actions.couriersEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Курьер успешно удален' }) );
		} else {
			throw new Error(data.message || '')
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default couriersDelete;