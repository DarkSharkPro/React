import { takeEvery, throttle } from 'redux-saga/effects';
import types from '../../const';
import addresseesGet from './addresseesGet';
import addresseesAdd from './addresseesAdd';
import addresseesSearch from './addresseesSearch';
import addresseesEditSave from './addresseesEditSave';
import addresseesDelete from './addresseesDelete';

export default function* addressees() {
	yield takeEvery(types.ADDRESSEES_GET, addresseesGet);
	yield takeEvery(types.ADDRESSEES_ADD, addresseesAdd);
	yield throttle(700, types.ADDRESSEES_SEARCH, addresseesSearch);
	yield takeEvery(types.ADDRESSEES_EDIT_SAVE, addresseesEditSave);
	yield takeEvery(types.ADDRESSEES_DELETE, addresseesDelete);
};