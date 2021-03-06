import { takeEvery, throttle } from 'redux-saga/effects';
import types from '../../const';
import couriersGet from './couriersGet';
import couriersAdd from './couriersAdd';
import couriersSearch from './couriersSearch';
import couriersEditSave from './couriersEditSave';
import couriersDelete from './couriersDelete';

export default function* couriers() {
	yield takeEvery(types.COURIERS_GET, couriersGet);
	yield takeEvery(types.COURIERS_ADD, couriersAdd);
	yield throttle(700, types.COURIERS_SEARCH, couriersSearch);
	yield takeEvery(types.COURIERS_EDIT_SAVE, couriersEditSave);
	yield takeEvery(types.COURIERS_DELETE, couriersDelete);
};