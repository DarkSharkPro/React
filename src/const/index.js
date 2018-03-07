import * as auth from './auth';
import * as header from './header';
import * as masterTable from './masterTable';
import * as clients from './clients';
import * as addressees from './addressees';
import * as couriers from './couriers';
import * as notifiers from './notifiers';
import * as MTEntity from './masterTableEntity';
import * as form from './form';
import * as autoSuggestion from './autoSuggestion';


const types = {
	...form,
	...auth,
	...header,
	...clients,
	...masterTable,
	...addressees,
	...couriers,
	...notifiers,
	...MTEntity,
	...autoSuggestion
};

export default types;
