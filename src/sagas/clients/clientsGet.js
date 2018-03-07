import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* clientsGet(){
	try {
		const { data = [] } = yield instance('getClients');
		yield put( actions.clientsGetSuccess(data) );
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default clientsGet;