import { reducer as formReducer } from 'redux-form'
import types from '../const';

export const form = formReducer.plugin({
	addEntityForm: (state, action) => {
		switch(action.type) {
			case types.ENTITY_FORM_ADD_SUGGESTION: {
				const { entity, suggestion } = action.payload;
				return {
					...state,
					values: {
						...state.values,
						[entity]: { ...suggestion }
					}
				}
			}
			case types.ENTITY_FORM_ADD_VAL_TO_HIDDEN_FIELD: {
				const { entity, field, value } = action.payload;
				return {
					...state,
					values: {
						...state.values,
						[entity]: {
							...state.values[entity],
							[field]: value
						}
					}
				}
			}
			default:
				return state
		}
	}
});
