import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';

import { validateField, required } from '../../utils/validate';

let SearchForm = props => {
	const {
		handleSubmit,
		parentClass = '',
	} = props;

	return(
		<form className={`form ${parentClass}`}>
			<div className='table__cell'>
				<label>Оператор
					<Field
						component='input'
						type='text'
						name='operator'
						placeholder=''
					/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Дата создания</label>
				<Field
					component='input'
					type='date'
					name='dateCreate'
					placeholder=''
				/>
			</div>
			<div className='table__cell'>
				<label>Клиент
					<Field
						component='input'
						type='text'
						name='client'
						placeholder=''
					/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Отправитель
				<Field
					component='input'
					type='text'
					name='sender'
					placeholder=''
				/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Получатель
				<Field
					component='input'
					type='text'
					name='recipient'
					placeholder=''
				/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Дата отправки</label>
				<Field
					component='input'
					type='date'
					name='dateSend'
				/>
			</div>
			<div className='table__cell'>
				<label>Дата получения</label>
				<Field
					component='input'
					type='date'
					name='dateRecive'
				/>
			</div>
			<div className='table__cell'>
				<label>Курьер
					<Field
						component='input'
						type='text'
						name='courier'
						placeholder=''
					/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Тип отправления
					<Field
						component='input'
						type='text'
						name='shipmentType'
						placeholder=''
					/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Тип оплаты
					<Field
						component='input'
						type='text'
						name='paymentType'
						placeholder=''
					/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Оплата
				<Field
					component='input'
					type='text'
					name='payment'
					placeholder=''
				/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Забор отправки
				<Field
					component='input'
					type='text'
					name='shipmentPickup'
					placeholder=''
				/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Возврат
					<Field
						component='input'
						type='text'
						name='shipmentReturn'
						placeholder=''
					/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Вид хранения
					<Field
						component='input'
						type='text'
						name='storageType'
						placeholder=''
					/>
				</label>
			</div>
			<div className='table__cell'>
				<label>Обработка документов
					<Field
						component='input'
						type='text'
						name='docProcessing'
						placeholder=''
					/>
				</label>
			</div>
		</form>
)};

export default reduxForm({
	form: ['text'],
	enableReinitialize: true
})( SearchForm );