import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* checkToken(){
	try {
		const { data } = yield instance( 'checkToken' );
		if ( data ){
			yield put( actions.checkTokenSuccess({ auth: true, login: data }) );
		}
	} catch (e) {
		yield put(actions.notifierSetError({ message: e.message }));
	};
};

export default checkToken;