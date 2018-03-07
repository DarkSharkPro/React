import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* clientsEditSave({ data }){
	try {
		const { data: response } = yield instance('editClient', data);
		if ( response.status ){
			yield put( actions.clientsEditSuccess(response.edited[0]) );
			yield put( actions.clientsEditReset() );
			yield put( actions.notifierSetSuccess({ message: 'Изменения успешно сохранены' }) );
		} else {
			throw new Error( response.message || '' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default clientsEditSave;