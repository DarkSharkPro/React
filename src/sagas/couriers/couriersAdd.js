import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* couriersAdd({ data }){
	try {
		const { data: response } = yield instance('addNewCourier', data);
		if ( response.status ){
			yield put( actions.couriersGetSuccess( response.data ) );
			yield put( actions.notifierSetSuccess({ message: 'Курьер успешно добавлен' }) );
		} else {
			throw new Error( response.message || '' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default couriersAdd;