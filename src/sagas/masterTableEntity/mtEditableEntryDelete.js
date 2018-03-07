import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* mtEditableEntryDelete({ id }){

	const isConfirm = window.confirm('Вы хотите удалить запись?');
	if ( !isConfirm ) return false;

	try {
		const { data } = yield instance( 'mtEditableEntryDelete', { id } );

		if ( data.status ){
			yield put( actions.mtEditableEntryClose() );
			yield put( actions.notifierSetSuccess({ message: 'Запись успешно удалена' }) );
		} else {
			throw new Error(data.message || '')
		};

	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default mtEditableEntryDelete;