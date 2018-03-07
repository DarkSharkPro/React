import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FormSection } from 'redux-form';

import { validateField, required } from '../../utils/validate';
import { ServicePostalFields } from './servicePostalFields';
import AutoComplete from '../autoComplete';

export const ServiceClientFields = ({ navSelected }) => {
	const fullClassName = 'formgroup' + (navSelected === 0 ? ' active' : ' hidden');
	const name='client';

	return (
		<FormSection name={name}>
			<div className={ fullClassName }>
				<div className='formgroup__cell'>
					<label>Наименование:&nbsp;</label>
					<Field
						component='input'
						type='hidden'
						name='id'
					/>
					<Field
						component={ validateField }
						type='hidden'
						name='clients_name'
						placeholder='Наименование'
						validate={[ required ]}
					/>
					<AutoComplete
						entity={name}
						linkField="clients_name"
					/>
				</div>
				<div className='formgroup__cell'>
					<label>ИНН:&nbsp;</label>
					<Field
						component='input'
						type='text'
						name='client_inn'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Договор:&nbsp;</label>
					<Field
						component='input'
						type='text'
						name='contract_id'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Адрес:&nbsp;</label>
					<Field
						component='input'
						type='text'
						name='adress'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Контактное&nbsp;лицо:&nbsp;</label>
					<Field
						component='input'
						type='text'
						name='contact_face'
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
					<label>Email:&nbsp;</label>
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
	)
};