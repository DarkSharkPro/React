import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* couriersGet(){
	try {
		const { data = [] } = yield instance('getCouriers');
		yield put( actions.couriersGetSuccess(data) );
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default couriersGet;