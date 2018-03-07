import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* mtEditableEntrySave({ data }){
	try {
		const { data: response } = yield instance('mtEditableEntrySave', data);
		if ( response.status ){
			yield put( actions.mtEditableEntryClose() );
			yield put( actions.notifierSetSuccess({ message: 'Запись успешно отредактирована.' }) );
		} else {
			throw new Error( response.message || '' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default mtEditableEntrySave;