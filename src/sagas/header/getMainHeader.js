import { put } from 'redux-saga/effects';
import { instance } from '../axios';
import actions from '../../actions';

function* getMainHeader(){
	try {
		const { data } = yield instance('getMainHeader');

		// Uncoment for test
		// yield put( actions.getMainHeaderSuccess([
		// 	{name: 'table', description: 'Главная таблица'},
		// 	{name: 'clients', description: 'Клиенты'},
		// 	{name: 'addressees', description: 'Адресаты'},
		// 	{name: 'couriers', description: 'Курьеры'},
		// 	{name: 'statistic', description: 'Статистика'},
		// 	{name: 'add-user', description: 'Добавить пользователя'},
		// 	{name: 'logout', description: 'Выход'}
		// ]) );
		yield put( actions.getMainHeaderSuccess(data) );
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	};
};

export default getMainHeader;