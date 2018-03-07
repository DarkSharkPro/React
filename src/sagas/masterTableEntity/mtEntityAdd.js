import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* mtEntityAdd({ data }){
	try {
		const { data: response } = yield instance('mtEntityAdd', { ...data });
		yield put( actions.mtEntityAddSuccess(response) );
	} catch (e) {
		yield put(actions.notifierSetError({ message: e.message }));
	};
};

export default mtEntityAdd;