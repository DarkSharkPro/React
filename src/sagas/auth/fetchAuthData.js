import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* fetchAuthData({ data }){
	try {
		const { data: response } = yield instance( 'login', data );
		yield put( actions.setAuthStatus(response) );
		if ( response.auth ){
			sessionStorage.setItem('delivery_token', response.token);
		}
		//yield put( actions.setAuthStatus({auth:true, login: data.login}) ); // Uncommit for test
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default fetchAuthData;