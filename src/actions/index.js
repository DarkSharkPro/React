import * as authorization from './authorization';
import * as mastertable from './masterTable';
import * as mainHeader from './mainHeader';
import * as clients from './clients';
import * as addressees from './addressees';
import * as couriers from './couriers';
import * as notifiers from './notifiers';
import * as masterTableEntity from './masterTableEntity';
import * as form from './form';
import * as autoSuggestion from './autoSuggestion';

const actions = {
	...form,
    ...authorization,
    ...mastertable,
    ...mainHeader,
    ...clients,
    ...addressees,
    ...couriers,
    ...notifiers,
    ...masterTableEntity,
    ...autoSuggestion
};

export default actions;