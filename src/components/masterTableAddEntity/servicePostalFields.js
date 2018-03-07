import React from 'react';
import { Field, FormSection } from 'redux-form';

import { validateField, required } from '../../utils/validate';
import AutoComplete from '../autoComplete';

export const ServicePostalFields = ({navSelected}) => {
	const fullClassName = 'formgroup' + (navSelected === 20 ? ' active' : ' hidden');
	const name='courier';
	return (
		<FormSection name={name}>
			<div className={ fullClassName }>
				<div className='formgroup__cell'>
					<label>ФИО:&nbsp;</label>
					<Field
						component='input'
						type='hidden'
						name='id'
					/>
					<Field
						component={ validateField }
						validate={[ required ]}
						type='hidden'
						name='fio'
					/>
					<AutoComplete entity={name} linkField="fio"	/>
				</div>
				<div className='formgroup__cell'>
					<label>Авто:&nbsp;</label>
					<Field
						component='input'
						type='text'
						name='car'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Телефон:&nbsp;</label>
					<Field
						component={ validateField }
						validate={[ required ]}
						type='text'
						name='phone'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Примечание:&nbsp;</label>
					<Field
						component='input'
						type='text'
						name='comments'
					/>
				</div>
			</div>
		</FormSection>
	)
}