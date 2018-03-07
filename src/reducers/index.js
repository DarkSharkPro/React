import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { form } from './form';
import authorization from './authorization';
import masterTable from './masterTable';
import header from './header';
import addressees from './addressees';
import couriers from './couriers';
import clients from './clients';
import notifiers from './notifiers';
import autoSuggestion from './autoSuggestion';

export default combineReducers({
	router: routerReducer,
    form,
    authorization,
    masterTable,
    header,
    addressees,
    couriers,
    clients,
    notifiers,
    autoSuggestion
});