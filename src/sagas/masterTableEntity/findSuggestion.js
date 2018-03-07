import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* findSuggestion({ payload }){
	try {
		const { data = [] } = yield instance('getSuggestion', payload);
		yield put( actions.suggestionResponse(response) );
	} catch (e) {
		yield put(actions.notifierSetError({ message: e.message }));
	};
};

export default findSuggestion;