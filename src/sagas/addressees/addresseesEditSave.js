import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* addresseesEditSave({ data }){
	try {
		const { data: response } = yield instance('editContact', data);
		if ( response.status ){
			yield put( actions.addresseesEditSuccess(response.edited[0]) );
			yield put( actions.addresseesEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
		} else {
			throw new Error( response.message || '' )
		}
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default addresseesEditSave;