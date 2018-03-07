import React from 'react';
import { Field, FormSection, reduxForm, reset } from 'redux-form';

import { validateField, required } from '../../utils/validate';
import ClientsForm from '../clients/clientsForm';
import { ServiceClientFields } from './serviceClientFields';
import { ServiceFinancesFields } from './serviceFinancesFields';
import { ServiceDeliveryFields } from './serviceDeliveryFields';
import { ServiceKeepingFields } from './serviceKeepingFields';
import { ServicePostalFields } from './servicePostalFields';
import { ServiceDocprocessingFields } from './serviceDocprocessingFields';
import { ServiceDeliveryRFFields } from './serviceDeliveryRFFields';

let SubTable = null;

let addEntityForm = props => {
	const {
		handleSubmit,
		deleteHandler,
		parentClass = '',
		currentServ,
		navSelected,
		closeAddForm
	} = props;

	const selectSubTable = (currentServ) => {
		switch (currentServ) {
			case 1:
				SubTable = <ServiceDeliveryFields />
				break;
			case 2:
				SubTable = <ServiceKeepingFields />
				break;
			case 3:
				SubTable = <ServicePostalFields />
				break;
			case 4:
				SubTable = <ServiceDeliveryRFFields />
				break;
			case 5:
				SubTable = <ServiceDocprocessingFields />
				break;
			default:
				break;
		}
	}
	
	return(
		<form className={`form ${parentClass}`}>
			<div className='formgroup hidden'>
				<div className='formgroup__cell'>
					<Field
						component='input'
						type='text'
						name='operator'
						placeholder='Оператор'
					/>
				</div>
				<div className='formgroup__cell'>
					<Field
						component='input'
						type='text'
						name='creationDate'
						placeholder='Дата создания'
					/>
				</div>
				<div className='formgroup__cell'>
					<Field
						component='input'
						type='hidden'
						name='service'
						placeholder='Услуга'
					/>
				</div>
			</div>

			<ServiceClientFields navSelected={navSelected} />
			<SubTable navSelected={navSelected}/>
			<ServiceFinancesFields navSelected={navSelected} />

			<div className='mng__btn'>
				<span className='btn --save' onClick={ handleSubmit }>Сохранить</span>
				{
					props.deleteHandler ?
					<span className='btn --delete' onClick={ deleteHandler }>Удалить</span> : null
				}
				<span className='btn --cancel' onClick={ closeAddForm }>Закрыть</span>
			</div>
		</form>
	)
};

export default reduxForm({
	form: ['text'],
	enableReinitialize: true
})( addEntityForm );
