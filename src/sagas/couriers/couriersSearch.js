import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* couriersSearch({ data }){
	try {
		const { data } = yield instance('couriers_search', data);

		yield put( actions.couriersGetSuccess() );
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default couriersSearch;