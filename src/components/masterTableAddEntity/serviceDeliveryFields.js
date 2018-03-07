import React from 'react';
import { Field, FormSection } from 'redux-form';

import { validateField, validateSelectField, required } from '../../utils/validate';
import { ServicePostalFields } from './servicePostalFields';
import { ServiceAddresseesFields } from './serviceAddresseesFields';
import AutoComplete from '../autoComplete';

export const ServiceDeliveryFields = ({navSelected}) => (
	<React.Fragment>

		<FormSection name='sender'>
			<div className={'formgroup' + (navSelected === 10 ? ' active' : ' hidden')}>
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
						placeholder='Наименование'
					/>
					<AutoComplete
						entity='sender'
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

		<ServiceAddresseesFields
			navSelected={ navSelected }
			name='recepient'
		/>

		<ServicePostalFields navSelected={ navSelected } />

		<FormSection name='deliveryAssets'>
			<div className={'formgroup' + (navSelected === 12 ? ' active' : ' hidden')}>
				<div className='formgroup__cell'>
					<label>Дата&nbsp;отправки:&nbsp;</label>
					<Field
						component={ validateField }
						validate={[ required ]}
						type='date'
						name='sendDate'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Дата&nbsp;получения:&nbsp;</label>
					<Field
						component='input'
						type='date'
						name='recepientDate'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Тип&nbsp;отправления:&nbsp;</label>
					<Field
						name="shipmentType"
						component={ validateSelectField }
						validate={[ required ]} >
							<option></option>
							<option value={1}>Письмо</option>
							<option value={2}>Бандероль</option>
							<option value={3}>Посылка</option>
					</Field>
				</div>
			</div>
		</FormSection>
	</React.Fragment>
)