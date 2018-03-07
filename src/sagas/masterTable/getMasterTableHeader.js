import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* getMasterTableHeader(){

	try {
		const { data } = yield instance('getMasterTableHeader');
		const { header, services } = data;
		
		yield put(actions.setMasterTableHeader(header) );
		yield put( actions.MTServicesGetSuccess(services) )
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default getMasterTableHeader;