import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* logout(){
	try {
		yield instance( 'logOut' );
		sessionStorage.clear();
	} catch (e) {
		sessionStorage.clear();
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default logout;