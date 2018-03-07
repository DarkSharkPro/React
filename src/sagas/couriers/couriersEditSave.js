import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* couriersEditSave({ data }){
	try {
		const { data: response } = yield instance('editCourier', data);
		if ( response.status ){
			yield put( actions.couriersEditSuccess(response.edited[0]) );
			yield put( actions.couriersEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
		} else {
			throw new Error( response.message || '' )
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default couriersEditSave;