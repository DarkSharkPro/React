import React from 'react';
import { Field, FormSection } from 'redux-form';

import { validateField, required } from '../../utils/validate';
import AutoComplete from '../autoComplete';

export const ServiceAddresseesFields = ({ navSelected, name = '' }) => (
	<FormSection name={ name }>
		<div className={'formgroup' + (navSelected === 11 ? ' active' : ' hidden')}>
			<div className='formgroup__cell'>
				<label>Наименование:&nbsp;</label>
				<Field
					component='input'
					type='hidden'
					name='id'
				/>
				<Field
					component={ validateField }
					validate={[ required ]}
					type='hidden'
					name='contact_name'
				/>
				<AutoComplete
					entity={ name }
					linkField="contact_name"
				/>
			</div>
			<div className='formgroup__cell'>
				<label>ФИО:&nbsp;</label>
				<Field
					component='input'
					type='text'
					name='fio'
				/>
			</div>
			<div className='formgroup__cell'>
				<label>Адрес:&nbsp;</label>
				<Field
					component={ validateField }
					validate={[ required ]}
					type='text'
					name='address'
				/>
			</div>
			<div className='formgroup__cell'>
				<label>Телефон:&nbsp;</label>
				<Field
					component='input'
					type='text'
					name='phone'
				/>
			</div>
			<div className='formgroup__cell'>
				<label>E-mail:&nbsp;</label>
				<Field
					component='input'
					type='text'
					name='email'
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
);