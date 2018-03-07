import React from 'react';
import { Field, FormSection } from 'redux-form';
import { validateField, required } from '../../utils/validate';

export const ServiceFinancesFields = ({navSelected}) => {
	const fullClassName = 'formgroup' + (navSelected === 1 ? ' active' : ' hidden');
	return (
		<FormSection name='finances'>
			<div className={ fullClassName }>
				<div className='formgroup__cell'>
					<label>Тип оплаты: &nbsp;</label>
					<Field name="paymantType" component="select">
						<option value={1}>Наличный</option>
						<option value={2}>Безналичный</option>
					</Field>
				</div>
				<div className='formgroup__cell'>
					<label>Оплата:&nbsp;</label>
					<Field name="payment" component="select">
						<option value={1}>Есть</option>
						<option value={2}>Нет</option>
						<option value={3}>Частично</option>
					</Field>
				</div>
				<div className='formgroup__cell'>
					<label>Приход:&nbsp;</label>
					<Field
						component={ validateField }
						validate={[ required ]}
						type='text'
						name='income'
					/>
				</div>
				<div className='formgroup__cell'>
					<label>Расход:&nbsp;</label>
					<Field
						component={ validateField }
						validate={[ required ]}
						type='text'
						name='expense'
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