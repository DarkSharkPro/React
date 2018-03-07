import axios from 'axios';
import { path } from './config';

const xcsrf = document.querySelector('[name="csrf-token"]');
const headers = {
	'X-Requested-With': 'XMLHttpRequest',
	'X-CSRF-TOKEN' : xcsrf ? xcsrf.content : null
};
const token = sessionStorage.getItem('delivery_token');

export const instance = ( route, data={} ) => {
	data.token = token;
	return axios.post( `${path}${route}`, {data}, {headers} );
}